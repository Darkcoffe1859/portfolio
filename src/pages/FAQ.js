// src/pages/FAQ.js
import React from 'react';

function FAQ() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Frequently Asked Questions (FAQ)</h1>

      <section>
        <h2>1. How can I create an account?</h2>
        <p>Click on the “Sign Up” button at the top right of the page, fill in your details, and follow the prompts to create your account.</p>
      </section>

      <section>
        <h2>2. How can I track my order?</h2>
        <p>Once your order is shipped, you will receive a tracking number by email, which you can use to track your order status.</p>
      </section>

      <section>
        <h2>3. What payment methods do you accept?</h2>
        <p>We accept Visa, MasterCard, American Express, and PayPal.</p>
      </section>

      <section>
        <h2>4. What is your return policy?</h2>
        <p>We offer a 30-day return policy on most items. Please visit our <a href="/returns">Returns</a> page for more details.</p>
      </section>

      <section>
        <h2>5. How can I contact customer support?</h2>
        <p>You can reach us at <a href="mailto:support@firstshop.com">support@firstshop.com</a> or call us at (123) 456-7890.</p>
      </section>
    </div>
  );
}

export default FAQ;

