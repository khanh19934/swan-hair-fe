import * as React from "react";

const Employees: React.FC = () => {
  return (
    <div className="container-fluid employees">
      <div className="container ">
        <h4 className="text-center pt-4">Nhân viên của chúng tôi</h4>
        <p className="text-center mt-3 primary-description">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
        <div className="row employees__row">
          <div className="col-md">
            <div className="staff">
              <div
                className="img mb-4"
                style={{
                  backgroundImage: `url(
                    "https://uphinh.vn/images/2019/09/23/ef49d0a102ddea95008b94958346c586.jpg"
                  )`
                }}
              ></div>
              <div className="info text-center">
                <h3>
                  <a href="teacher-single.html">Marie Mush</a>
                </h3>
                <span className="position">Fashionist</span>
                <div className="text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="staff">
              <div
                className="img mb-4"
                style={{
                  backgroundImage: `url(
                    "https://uphinh.vn/images/2019/09/23/ef49d0a102ddea95008b94958346c586.jpg"
                  )`
                }}
              ></div>
              <div className="info text-center">
                <h3>
                  <a href="teacher-single.html">Marie Mush</a>
                </h3>
                <span className="position">Fashionist</span>
                <div className="text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="staff">
              <div
                className="img mb-4"
                style={{
                  backgroundImage: `url(
                    "https://uphinh.vn/images/2019/09/23/ef49d0a102ddea95008b94958346c586.jpg"
                  )`
                }}
              ></div>
              <div className="info text-center">
                <h3>
                  <a href="teacher-single.html">Marie Mush</a>
                </h3>
                <span className="position">Fashionist</span>
                <div className="text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="staff">
              <div
                className="img mb-4"
                style={{
                  backgroundImage: `url(
                    "https://uphinh.vn/images/2019/09/23/ef49d0a102ddea95008b94958346c586.jpg"
                  )`
                }}
              ></div>
              <div className="info text-center">
                <h3>
                  <a href="teacher-single.html">Marie Mush</a>
                </h3>
                <span className="position">Fashionist</span>
                <div className="text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
