import "./App.css";
import Navbar from "./componet/Navbar";
import bannerImg from "./assets/3421663_6966 1.png";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <section>
          <div className="container">
            <div className="banner">
              <div>
                <h1>Protect your health and take care of your health</h1>
                <div className="service">
                  <div>
                    <span></span>
                    <div>
                      <h3>Make an appointment</h3>
                      <p>Schedule with your favorite doctor anythime</p>
                    </div>
                  </div>
                  <div>
                    <span></span>
                    <div>
                      <h6>Health guarantee forever</h6>
                      <p>We always provide the dest warranty for you</p>
                    </div>
                  </div>
                  <div>
                    <span></span>
                    <div>
                      <h6>Find your dest doctor</h6>
                      <p>We always provide the dest warranty for you</p>
                    </div>
                  </div>
                  <div>
                    <span></span>
                    <div>
                      <h6>Spread in various place</h6>
                      <p>Now clinics are available in various places</p>
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
