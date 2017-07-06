import React from 'react';

const LandingPage = ({ favItems, favsCount, starItem }) => {

  return (
    <div>
      <h1>Welcome back, Star Guy!</h1>
      <p>You have "{ favsCount }" pooped items as your favorites</p>
      <p>Here they are:</p>
      <div>{  }</div>
    </div>
  )
}

export default LandingPage;
