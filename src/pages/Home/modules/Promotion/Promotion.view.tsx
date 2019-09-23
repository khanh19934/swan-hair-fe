import * as React from "react";
import Button from "../../../../components/GenericButton/GennericButton.component";

const bgImg = require("../../../../assets/images/bg_2.jpg");

const Promotion: React.FC = () => (
  <section
    className="promotion-section promotion-discount promotion-img"
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    <div className="overlay"></div>
    <div className="container">
      <div className="row no-gutters justify-content-end">
        <div className="col-md-5 discount">
          <h3>Save up to 25% Off</h3>
          <h2 className="mb-4">Student Discount</h2>
          <p className="mb-4">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>

          <Button
            title="Book Now"
            buttonClassName="banner-button"
            titleClassName="banner-button__text"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Promotion;
