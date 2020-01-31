import React, {useState} from 'react';
import {PayPalButton} from 'react-paypal-button-v2'
import styled from "styled-components";

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

    const handlePayment = (details,data) => {
          return(
              <p>Maksu suoritettu!  Kiitti täst, ${details.payer.name.given_name} :-DDD</p>
          )
    };

    return (
        <FormWrapper>
            <div className="column">
                <SInput
                    type="number"
                    min="0.50"
                    step="0.50"
                    max="2500"
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