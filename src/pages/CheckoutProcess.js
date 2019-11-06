import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class CheckoutProcess extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }


  render() {
    return (
        <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_ukemeE5527HxC1FqwuyVsLUW00UvxRosQW"
      />
      
    )
  }
}













// import React, {Component} from 'react';
// import {Elements, StripeProvider} from 'react-stripe-elements';
// import CheckoutForm from './CheckoutForm';

// class CheckoutProcess extends Component {
//   render() {
//     return (
//       <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
//         <div className="example">
//           <h1>React Stripe Elements Example</h1>
//           <Elements>
//             <CheckoutForm />
//           </Elements>
//         </div>
//       </StripeProvider>
//     );
//   }
// }

// export default CheckoutProcess;