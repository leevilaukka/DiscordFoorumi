import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import MarkdownButtons from "../misc/MarkdownButtons";
import {createArticle} from "../../actions/forumActions/postActions";

const SForm = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const EmbedInput = styled.input`
    background-color: #23272a;
    border: #7289da solid 1px;
    border-radius: 5px;
    color: #FFF;
    width: 100%;
    outline: none;
    padding: 1rem;
    margin-bottom: 1rem;
    
    :invalid{
      border-color: #FF0000;
    }
`;


const BodyTextArea = styled.textarea`
    background-color: #23272a;
    border: #7289da solid 1px;
    border-radius: 0 0 5px 5px;
    color: #FFF;
    width: 100%;
    resize: vertical;
    outline: none;
    padding: 1rem;
    margin-bottom: 1rem;
    border-top: none;
    min-height:55px;
    
`;

const SubmitButton = styled.button`
    background-color: #7289da;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: background-color .2s;
    font-size: 1rem;
    padding: .25rem .5rem;
    text-decoration: none;
    
    :hover {
        cursor: pointer;
    }
`;

const CreateArticle = () => {
    const user = useSelector(state => state.user.user);
    const thread = useSelector(state => state.threads.thread);

    const dispatch = useDispatch();

    const [body, setBody] = useState("");
    const [embed, setEmbed] = useState("");

    const youTubeRegEx = "^(http(s)?://)?((w){3}.)?youtu(be|.be)?(.com)?/.+";

    const handleSubmit = e => {
        e.preventDefault();

        if (body) {
            let newPost;

            if (embed) {
                newPost = {
                    body,
                    user: user._id,
                    thread: thread._id,
                    embed
                }
            } else {
                newPost = {
                    body,
                    user: user._id,
                    thread: thread._id
                }
            }
            dispatch(createArticle(newPost, user, thread));
            setEmbed("");
            setBody("");
        } else {
            alert("Täytä kaikki kentät!")
        }

    };

    const bodyText = useRef(null);

    const markdownSwitch = btnString => {
        const textAreaValue = bodyText.current.value;
        const selectionStart = bodyText.current.selectionStart;
        const selectionEnd = bodyText.current.selectionEnd;
        const textBefore = textAreaValue.substring(0, selectionStart);
        const textAfter = textAreaValue.substring(selectionEnd, textAreaValue.length);
        const selectionText = textAreaValue.substring(selectionStart, selectionEnd);
        let newValue

        switch (btnString) {
            case "bold":
                newValue = textBefore + `**${selectionText}**` + textAfter;
                bodyText.current.value = newValue;
                setBody(newValue);
                break;
            case "italic":
                newValue = textBefore + `*${selectionText}*` + textAfter;
                bodyText.current.value = newValue;
                setBody(newValue);
                break;
            case "strikethrough":
                newValue = textBefore + `~~${selectionText}~~` + textAfter;
                bodyText.current.value = newValue;
                setBody(newValue);
                break;
            case "spoiler":
                newValue = textBefore + `<spoiler>${selectionText}</spoiler>` + textAfter;
                bodyText.current.value = newValue;
                setBody(newValue);
                break;
            default:
                return;
        }
    };


    return (
        <div>
            <SForm onSubmit={handleSubmit}>
                <MarkdownButtons handler={markdownSwitch}/>
                <BodyTextArea
                    ref={bodyText}
                    rows="6"
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder="Teksti (pakollinen)"
                    title="Kommentin teksti"
                    required
                />
                <EmbedInput
                    type="text"
                    onChange={e => setEmbed(e.target.value)}
                    value={embed}
                    placeholder="YouTube-upote"
                    pattern={youTubeRegEx}
                    title="Anna kelvollinen YouTube-linkki!"
                />

                <SubmitButton type="submit">Lisää kommentti</SubmitButton>
            </SForm>
        </div>
    );
};

export default CreateArticle;