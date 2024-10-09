// src/pages/TermsOfService.js
import React from 'react';

function TermsOfService() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Terms of Service</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to FirstShop! By accessing our website, you agree to be bound by our terms and conditions.</p>
      </section>

      <section>
        <h2>2. Purchases</h2>
        <p>All purchases made on FirstShop are subject to product availability. We reserve the right to limit quantities purchased.</p>
      </section>

      <section>
        <h2>3. User Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account information and password.</p>
      </section>

      <section>
        <h2>4. Returns and Refunds</h2>
        <p>Returns must be initiated within 30 days of receipt, and products must be in their original condition.</p>
      </section>

      <section>
        <h2>5. Changes to Terms</h2>
        <p>We may update our terms of service from time to time. Any changes will be posted on this page.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions, please contact us at <a href="mailto:support@firstshop.com">support@firstshop.com</a>.</p>
      </section>
    </div>
  );
}

export default TermsOfService;

