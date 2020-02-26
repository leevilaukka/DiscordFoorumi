import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postThread} from "../../actions/forumActions/threadActions";
import styled from "styled-components";
import MarkdownButtons from "../misc/MarkdownButtons";

const SForm = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const TitleInput = styled.input`
    background-color: #23272a;
    border: #7289da solid 1px;
    border-radius: 5px;
    color: #FFF;
    width: 100%;
    outline: none;
    padding: 1rem;
    margin-bottom: 1rem;
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

const CreateThread = () => {
    const user = useSelector(state => state.user.user);
    const board = useSelector(state => state.board.board);

    const dispatch = useDispatch();


    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [embed, setEmbed] = useState("");

    const youTubeRegEx = "^(http(s)?://)?((w){3}.)?youtu(be|.be)?(.com)?/.+";

    const handleSubmit = e => {
        e.preventDefault();

        if (title && body) {
            let newPost;

            if (embed) {
                newPost = {
                    title,
                    body,
                    user: user._id,
                    board: board._id,
                    embed
                }
            } else {
                newPost = {
                    title,
                    body,
                    user: user._id,
                    board: board._id
                }
            }
            dispatch(postThread(newPost, user, board));
            setEmbed("");
            setBody("");
            setTitle("");
        } else {
            alert("Täytä kaikki kentät!")
        }

    };

    return (
        <div>
            <SForm onSubmit={handleSubmit}>
                <TitleInput
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    placeholder="Langan otsikko"
                />
                <EmbedInput
                    type="text"
                    onChange={e => setEmbed(e.target.value)}
                    value={embed}
                    placeholder="YouTube-upote"
                    pattern={youTubeRegEx}
                    title="Anna kelvollinen YouTube-linkki!"
                />
                <MarkdownButtons/>
                <BodyTextArea
                    rows="6"
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder="Teksti (pakollinen)"
                />
                <SubmitButton type="submit">Luo lanka</SubmitButton>
            </SForm>
        </div>
    );
};

export default CreateThread;