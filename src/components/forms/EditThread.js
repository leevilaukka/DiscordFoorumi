import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import MarkdownButtons from "../misc/MarkdownButtons";
import {useDispatch} from "react-redux";
import {editThread} from "../../actions/forumActions/threadActions";

const EditFormBackdrop = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
`;

const EditFormWrapper = styled.div`
    background-color: #23272a;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    
    h3{
      margin-bottom: 1rem;
    }
`;

const EditForm = styled.form`
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

const EditThread = props => {

    const dispatch = useDispatch();

    useEffect(() => {
        setTitle(props.title);
        setBody(props.body);
        setEmbed(props.embed)
    }, [props]);

    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [embed, setEmbed] = useState("");

    const submitEdit = e => {
        e.preventDefault();
        const updatedThread = {
            title,
            body,
            embed
        };
            dispatch(editThread(props.threadId, updatedThread))
                .then(props.afterSubmit);
    };

    return (
        <>
            {
                props.open &&
                    <EditFormBackdrop id="backdrop" onClick={props.onBackdropClick}>
                        <EditFormWrapper>
                            <h3>Muokkaa lankaa</h3>
                            <EditForm onSubmit={submitEdit}>
                                <TitleInput
                                    type="text"
                                    placeholder="Langan otsikko"
                                    defaultValue={props.title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <EmbedInput
                                    type="text"
                                    placeholder="YouTube-upote"
                                    title="Anna kelvollinen YouTube-linkki!"
                                    defaultValue={props.embed}
                                    onChange={e => setEmbed(e.target.value)}
                                />
                                <MarkdownButtons/>
                                <BodyTextArea
                                    rows="6"
                                    placeholder="Teksti"
                                    defaultValue={props.body}
                                    onChange={e => setBody(e.target.value)}
                                />
                                <SubmitButton type="submit">Tallenna</SubmitButton>
                            </EditForm>
                        </EditFormWrapper>
                    </EditFormBackdrop>
            }
        </>
    );
};

export default EditThread;