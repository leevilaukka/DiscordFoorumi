import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { postThread} from "../../actions/forumActions/threadActions";
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

    const handleSubmit =  e => {
        e.preventDefault();
         dispatch(postThread({
            title,
            body,
            user: user._id,
            board: board._id
         }));
    };

    return (
        <div>
            <SForm>
                <TitleInput
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    placeholder="Langan otsikko"
                />
                <MarkdownButtons/>
                <BodyTextArea
                    rows="6"
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    placeholder="Teksti"
                />
                <SubmitButton type="submit" onClick={handleSubmit}>Luo lanka</SubmitButton>
            </SForm>
        </div>
    );
};

export default CreateThread;