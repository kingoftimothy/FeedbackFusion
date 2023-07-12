import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import getStripe from './GetStripe';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
                name = "FeedbackFusion"
                description = "$5 for 5 email credits"
                amount = {500}
                token = {token => this.props.handleToken(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
                <button className = "btn"> 
                    Add Credits
                </button>
            </StripeCheckout>
            
            // materialize ui css (className)
        );
        //return <button className = "btn" onClick={handleCheckout}>Add Credits</button>;
    }
}
// UNCOMMENT TO USE NEW PAYMENT METHOD!!!!
/*async function handleCheckout() {
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
}*/

export default connect(null, actions) (Payments);

