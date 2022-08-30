import React from "react";

export default function CartFooter() {
  return (
    <>
      <div className="cart-footer row">
        <div className="col-8">
          <span>
            <span>Policies:</span>
            <a href="/returnpolicy" target="_blank" rel="noopener noreferrer">
              Returns Policy
            </a>
            <a href="/s/terms" target="_blank" rel="noopener noreferrer">
              Terms of use
            </a>
            <a
              href="/s/paymentsecurity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Security
            </a>
            <a
              href="/pages/privacypolicy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a
              href="https://seller.flipkart.com/fiv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Infringement
            </a>
          </span>
          <span className="copyrightCart">
            © 2007-2022 <span>Flipkart.com</span>
          </span>
        </div>
        <div className="col-4">
          <span>Need help? </span>
          <span>
            Visit the
            <a href="#" target="_blank" rel="noopener noreferrer">
              Help Center
            </a>
            or
            <a href="#" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
