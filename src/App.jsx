import "./App.css";
import Navbar from "./componet/Navbar";
import bannerImg from "./assets/3421663_6966 1.png";
import C_logo from "./assets/calendar.png"
import L_logo from "./assets/location.png"
import S_logo from "./assets/shield.png"
import U_logo from "./assets/user.png"


function App() {
  return (
    <>
      <div>
        <Navbar />
        <section>
          <div className="container">
            <div className="banner">
              <div>
                <h1 className="banner-title">Protect your health and take care of your health</h1>
                <div className="service">
                  <div className="service-item">
                    <img src={C_logo} alt="" />
                    <div className="service-content">
                      <h3 className="service-tatile">Make an appointment</h3>
                      <p className="service-datile">Schedule with your favorite doctor anythime</p>
                    </div>
                  </div>
                  <div className="service-item">
                    <img src={S_logo} alt="" />
                    <div className="service-content">
                      <h6 className="service-tatile">Health guarantee forever</h6>
                      <p className="service-datile">We always provide the dest warranty for you</p>
                    </div>
                  </div>
                  <div className="service-item">
                    <img src={U_logo} alt="" />
                    <div className="service-content">
                      <h6 className="service-tatile">Find your dest doctor</h6>
                      <p className="service-datile">We always provide the dest warranty for you</p>
                    </div>
                  </div>
                  <div className="service-item">
                    <img src={L_logo} alt="" />
                    <div className="service-content">
                      <h6 className="service-tatile">Spread in various place</h6>
                      <p className="service-datile">Now clinics are available in various places</p>
                    </div>
                  </div>
                </div>
                <button className="button">Book Now</button>
              </div>
              <div className="banner_img">
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
