import React from "react";

import { Button } from "antd";

import CategoryList from "../../components/Category-list";
import HomeBg from "../../assets/images/header-headphones.jpg";
import imgZX9 from "../../assets/images/zx9-speader-croped.png";
import imgTable from "../../assets/images/speaker-on-table.png";

import "./Home.scss";
import CirclesBg from "./Circles-bg/Circles-bg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../services/routes";

function Home() {
  return (
    <div className="home">
      <main className="home__inner">
        <section className="home__sectionMain padding-main-x">
          <div className="home__sectionMain__inner row">
            <div className="home__sectionMain__imgBox">
              <img src={HomeBg} alt="home bg" />
            </div>
            <div className="home__sectionMain__content">
              <span className="home__sectionMain__copy-small">New Product</span>
              <h2 className="headingPrimary">
                XX99 MARK II<br></br> HEADPHONE
              </h2>
              <p className="home__sectionMain__p">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link to={`${ROUTES.PRODUCT}/xx99-mark-ii-headphones`}>
                <Button className="btn__primary mt-3" type="primary">
                  See Product
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <div className="padding-main-x">
          <section className="home__sectionList row">
            <CategoryList />
          </section>

          <section className="home__section-zx9 row">
            <div className="home__section-zx9__inner">
              <CirclesBg />
              <div className="home__section-zx9__content">
                <div className="home__section-zx9__imgBox">
                  <img src={imgZX9} alt="img zx9 type" />
                </div>
                <div className="home__section-zx9__copyBox">
                  <h2 className="headingPrimary">
                    ZX9<br></br> SPEAKER
                  </h2>
                  <p>
                    Upgrade to premium speakers that are <br></br> phenomenally
                    built to deliver truly <br></br>remarkable sound.
                  </p>
                  <Link to={`${ROUTES.PRODUCT}/zx9-speaker`}>
                    <button type="button" className="btn__secondary">
                      See Product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="home__section-zx7 row">
            <div className="home__section-zx7__inner">
              <div className="home__section-zx7__imgBox">
                <img src={imgTable} alt="zx7 type" />
              </div>
              <h2 className="headingSecondary">ZX7 SPEAKER</h2>
              <Link to={`${ROUTES.PRODUCT}/zx7-speaker`}>
                <button className="btn__tertiary">See Product</button>
              </Link>
            </div>
          </section>

          <section className="home__section-yx1 row">
            <div className="home__section-yx1__left section-card"></div>
            <div className="home__section-yx1__right section-card">
              <h2 className="headingSecondary">YX1 EARPHONES</h2>
              <Link to={`${ROUTES.PRODUCT}/yx1-earphones`}>
                <button className="btn__tertiary">See Product</button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
