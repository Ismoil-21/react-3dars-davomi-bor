import logo from "./assets/Group 20.png";
import search from "./assets/search.png";
import tv from "./assets/Polygon 1.png";
import spicy from "./assets/spicy.png";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="headers">
            <img src={logo} alt="" />
            <div className="links">
              <a className="home" href="">
                Home
              </a>
              <select>
                <option value="">Manu</option>
              </select>
              <select>
                <option value="">Services</option>
              </select>
              <a className="offers" href="">
                Offers
              </a>
            </div>
            <div className="qidir">
              <div className="buton">
                <input className="inp" type="text" />
                <img width={25} src={search} alt="" />
              </div>
              <button className="btn">Contact</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="container">
            <div className="section1">
              <div className="text">
                <h1>
                  Dive into Delights Of Delectable <span>Food</span>
                </h1>
                <p>
                  Where Each Plate Weaves a Story of Culinary Mastery and
                  Passionate Craftsmanship
                </p>
                <div className="buttons">
                  <button className="bttn">Order Now</button>
                  <button className="vd">Watch Video</button>
                  <button className="watch"><img width={15} src={tv} alt=""/></button>
                </div>
              </div>
              <img width={600} src={spicy} alt=""/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
