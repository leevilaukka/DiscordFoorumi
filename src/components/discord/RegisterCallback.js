import React, {useEffect, useState} from 'react';
import btoa from "btoa";
import qs from "querystring";
import axios from "axios";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../actions/userActions";

// Styled

const FormWrapper = styled.div`
    width: 100%;
    background-color: #2c2f33;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`;

const InputWrapper = styled.div`
    width: 80%;
    display: flex;
    align-self: center;
    justify-content: center;
    flex-wrap: wrap;

`;
const STitle = styled.h2`
  padding: 1rem;
`;
const SInput = styled.input`
    width: 100%;
    border-radius: 5px;
    min-height: 20px;
    background-color: #23272a;
    padding: 1rem;
    margin: 1rem auto;
    color: #FFF;
    border: 1px solid #7289da;
`;

const RegisterCallback = props => {

    let [alreadyUser, setAlreadyUser] = useState(false);

    const dispatch = useDispatch();

    const userError = useSelector(state => state.user.error);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        const CLIENT_ID = "669505696991150085";
        const CLIENT_SECRET = "cBvSc7LP5MYlF4cptOQE5zUrW_AaQJBb";
        const redirect = encodeURIComponent(`http://localhost:3000/discord/register/callback`);

        const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

        const url = qs.parse(props.location.search, {ignoreQueryPrefix: true});
        const code = url["?code"];


        axios(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
            {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${creds}`,
                },
            })
            .then(res => {
                const token = res.data.access_token;
                //window.localStorage.setItem('dToken', token);
                dispatch(getUser(token));

                if (userError !== "") {
                    setAlreadyUser(true);
                }
            })
            .catch(e => console.error(e));
    });


    return (
        !alreadyUser
        &&
        <FormWrapper>
            <STitle>Rekisteröidy</STitle>
            <InputWrapper>
                <h4>Käyttäjänimi</h4>
                <SInput value={user.username}/>
                <h4>Sähköposti</h4>
                <SInput value={user.email}/>
            </InputWrapper>
        </FormWrapper>
    );
};

export default RegisterCallback;