import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import StarIcon from "@mui/icons-material/Star";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <div className={`${styles.hero} container`}>
        <Helmet>
          <title>Home-Page</title>
        </Helmet>
        <div className={`${styles.heroParag}`}>
          <h1>Trade Crypto Futures & Options</h1>
          <p>
            Call & Put Options on BTC & ETH.
            <br />
            Perpetuals on BTC, ETH and 50+ Alts
          </p>
          <button>SIGN UP NOW</button>
          <div className={`${styles.heroInfo}`}>
            <div className={`${styles.heroInfo1}`}>
              <p>$791,300,242</p>
              <span>24th Total Volume</span>
            </div>
            <div className={`${styles.heroInfo1}`}>
              <p>$527,450,239</p>
              <span>7d Option Volume</span>
            </div>
            <div className={`${styles.heroInfo1}`}>
              <p>$123,543,235</p>
              <span>24th Futures Volume</span>
            </div>
          </div>
        </div>
        <div className={`${styles.heroImg}`}>
          <img
            src="https://global.delta.exchange/_next/static/images/mobile-1f09e5329036a954aaf9a9f4130a3424.png"
            alt=""
          />
        </div>
      </div>

      <div className={`${styles.market} container`}>
        <div className={`${styles.marketCards}`}>
          <div className={`${styles.marketCard}`}>
            <p>
              <StarIcon className={`${styles.marketIcon}`}></StarIcon> Crypto
              Deposits & Withdrawals
            </p>
          </div>
          <div className={`${styles.marketCard}`}>
            <p>
              <StarIcon className={`${styles.marketIcon}`}></StarIcon> Trade
              with versatile margining
            </p>
          </div>
          <div className={`${styles.marketCard}`}>
            <p>
              <StarIcon className={`${styles.marketIcon}`}></StarIcon> Trading
              Market available 24/7
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.learn} container`}>
        <div className={`${styles.learnHead}`}>
          <h1>Learning is Earning</h1>
          <p>
            Read our blog to learn about leveraged trading, crypto derivatives
            and trading strategies
          </p>
        </div>
        <div className={`${styles.learnCards}`}>
          <div className={`${styles.learnCard}`}>
            <div className={`${styles.learnCardImg}`}>
              <img
                src="https://static.delta.exchange/wp-content/uploads/2024/04/Blog-1.png"
                alt=""
              />
            </div>
            <div className={`${styles.learnCardInfo}`}>
              <h1>Kickstarting Your Trading Journey with Delta India APIis</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia consequuntur voluptas repudiandae, dolorem architecto
                sequi odit sit! Ipsum, suscipit necessitatibus. Assumenda
                reiciendis repellendus
              </p>
            </div>
            <div className={`${styles.learnCardProfil}`}>
              <div className={`${styles.learnCardProfilLeft}`}>
                <img
                  src="https://static.delta.exchange/wp-content/uploads/2024/02/avatar_user_60_1706880007-96x96.jpg"
                  alt=""
                />
                <p>Kunal Agrawal</p>
              </div>
              <div className={`${styles.learnCardProfilRight}`}>
                <p>April 10, 2024</p>
              </div>
            </div>
          </div>
          <div className={`${styles.learnCard}`}>
            <div className={`${styles.learnCardImg}`}>
              <img
                src="https://static.delta.exchange/wp-content/uploads/2024/04/What-is-risk-reversal-options-strategy-in-crypto-1024x608.jpeg"
                alt=""
              />
            </div>
            <div className={`${styles.learnCardInfo}`}>
              <h1>Risk Reversal Options Strategy in Crypto</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia consequuntur voluptas repudiandae, dolorem architecto
                sequi odit sit! Ipsum, suscipit necessitatibus. Assumenda
                reiciendis repellendus
              </p>
            </div>
            <div className={`${styles.learnCardProfil}`}>
              <div className={`${styles.learnCardProfilLeft}`}>
                <img
                  src="https://static.delta.exchange/wp-content/uploads/2020/10/Shubham-Goyal-96x96.jpg"
                  alt=""
                />
                <p>Kunal Agrawal</p>
              </div>
              <div className={`${styles.learnCardProfilRight}`}>
                <p>April 10, 2024</p>
              </div>
            </div>
          </div>
          <div className={`${styles.learnCard}`}>
            <div className={`${styles.learnCardImg}`}>
              <img
                src="https://static.delta.exchange/wp-content/uploads/2024/03/What-is-BitVM-1024x608.jpeg"
                alt=""
              />
            </div>
            <div className={`${styles.learnCardInfo}`}>
              <h1>Bitcoin BitVM: What is it all about Crypto?</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia consequuntur voluptas repudiandae, dolorem architecto
                sequi odit sit! Ipsum, suscipit necessitatibus. Assumenda
                reiciendis repellendus
              </p>
            </div>
            <div className={`${styles.learnCardProfil}`}>
              <div className={`${styles.learnCardProfilLeft}`}>
                <img
                  src="https://static.delta.exchange/wp-content/uploads/2024/02/avatar_user_60_1706880007-96x96.jpg"
                  alt=""
                />
                <p>Kunal Agrawal</p>
              </div>
              <div className={`${styles.learnCardProfilRight}`}>
                <p>April 10, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.analys} container`}>
        <div className={`${styles.analysLeft}`}>
          <video
            width="500"
            height="30"
            autoPlay
            loop
            muted
            className={`${styles.vid}`}
          >
            <source src="crypto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={`${styles.analysRight}`}>
          <h1>Get In-Depth Profit & Loss Analysis</h1>
          <p>
            Connect your wallet to get 24h, daily, weekly and cumulative Profit
            & Loss analysis. Level up your crypto investing strategy.
          </p>
          <button>Connect Portfolio</button>
        </div>
      </div>
    </>
  );
}
