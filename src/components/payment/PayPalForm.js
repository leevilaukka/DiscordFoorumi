import React, {useState} from 'react';
import {PayPalButton} from 'react-paypal-button-v2'
import styled from "styled-components";
import axios from "axios";

const SInput = styled.input`
    
`;

const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    
    .column{
        margin: 1rem auto;
        min-width: 50%;
    }
`;

const PayPalForm = () => {

    let [donation, setDonation] = useState("");

    const donationValue = e => {
        setDonation(e.target.value)
    };

    const handlePayment = (details, data) => {
        axios.post('${apiUrl}/mail/', {
            to: details.payer.email_address,
            subject: `Kiitti täst, ${details.payer.name.given_name} :-D`,
            text: `Kiitti näist ${donation} eurost :--D`
        });
        console.log(details)
    };

    return (
        <FormWrapper>
            <div className="column">
                <SInput
                    type="number"
                    min="0.50"
                    step="0.50"
                    max="1000000"
                    value={donation}
                    onChange={donationValue}
                />
            </div>
            <PayPalButton
                amount={donation}
                onSuccess={handlePayment}
                currency="EUR"
            />
        </FormWrapper>
    );
};

export default PayPalForm;