import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getThread, postThread} from "../../actions/forumActions/threadActions";
import {getAllThreads} from "../../actions/forumActions/allThreadsActions";

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
            <form>
                <input
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    type="text"
                    onChange={e => setBody(e.target.value)}
                    value={body}
                />
                <button type="submit" onClick={handleSubmit}>Luo lanka</button>
            </form>
        </div>
    );
};

export default CreateThread;