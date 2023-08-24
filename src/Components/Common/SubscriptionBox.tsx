import React, { useState } from 'react';

const SubscriptionBox: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setSubscribed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement subscription logic here
    // You can make an API request to handle the subscription

    // Simulating a successful subscription for demonstration purposes
    setSubscribed(true);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      <button onClick={handleSubmit}>Subscribe</button>
      {isSubscribed && <p>Thank you for subscribing!</p>}
    </div>
  );
};

export default SubscriptionBox;