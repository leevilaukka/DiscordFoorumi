import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Loader from "../misc/loader/Loader";

const BoardWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

const SBoard = styled.div`
    padding: 1rem;
    
    
    a {
        color: #FFF;
        text-decoration: none;
        padding: 5px;
        border-radius: 5px;
    }
`;

const BoardLinks = () => {
    const loading = useSelector(state => state.boards.loading);
    const boards = useSelector(state => state.boards.boards);

    return (
        <BoardWrapper>
            {
                loading ? <Loader/> : boards.map(board => {
                    const boardURI = board.boarduri;
                    //.toLowerCase().replace(" ","").normalize("NFD").replace(/[\u0300-\u036f]/g, ""
                    return (
                        <SBoard key={board._id}>
                            <Link to={`/b/${boardURI}`}>{board.title}</Link>
                        </SBoard>
                    )
                })
            }
        </BoardWrapper>
    );
};

export default BoardLinks;