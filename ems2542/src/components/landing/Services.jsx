import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <div className="row">
          {/* Service 1: Payment */}
          <div className="col-lg-4">
            <div className="text-center">
              <img src="./src/images/payment.jpg" alt="Payment" className="img-fluid rounded mb-4 custom-image-height" />
              <h3>Payment</h3>
              <p>Facilitate secure payment processing between buyers and sellers.</p>
            </div>
          </div>

          {/* Service 2: Transaction Escrow */}
          <div className="col-lg-4">
            <div className="text-center">
              <img src="./src/images/transactions.jpg" alt="Transaction Escrow" className="img-fluid rounded mb-4 imageheight" />
              <h3>Transaction Escrow</h3>
              <p>Act as an impartial third party to hold funds in escrow until predefined conditions are met.</p>
            </div>
          </div>

          {/* Service 3: Secure Storage of Funds */}
          <div className="col-lg-4">
            <div className="text-center">
              <img src="./src/images/securestorage.jpg" alt="Secure Storage of Funds" className="img-fluid rounded mb-4 imageheight" />
              <h3>Secure Storage of Funds</h3>
              <p>Safeguard user funds in secure wallets or accounts. Protect against unauthorized access and cyber threats.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
