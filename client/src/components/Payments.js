import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import getStripe from './GetStripe';

class Payments extends Component {
    render() {
        /*return (
            <StripeCheckout 
                amount = {500}
                token = {token => console.log(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            />
        );*/
        return <button onClick={handleCheckout}>Checkout</button>;
    }
}

async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.REACT_APP_PROD_KEY,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      //customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
}

export default Payments;

