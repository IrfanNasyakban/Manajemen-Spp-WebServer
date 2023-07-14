import React, { useState } from "react";
import "../style/dashboard.css";
import logo2 from "../assets/logo2.png";
import irvan from "../assets/irvan.png";
import widia from "../assets/widia.png";
import ari from "../assets/ari.png";
import fannisa from "../assets/fannisa.png";
import {
  BiCheckDouble,
  BiSolidBuildings,
  BiGroup,
  BiBookBookmark,
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoGooglePlus,
  BiLogoLinkedin,
  BiCube,
} from "react-icons/bi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Dashboard() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="container text-center text-md-left" data-aos="fade-up">
          <h1>Welcome to SMA 1 WATES</h1>
          <h2>" School of Science, Environment, Art and Technology "</h2>
          <a href="#about" class="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </div>
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about mt-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 logo">
                <img src={logo2} className="img-fluid" alt="" />
              </div>
              <div class="col-lg-9 pt-4 pt-lg-0">
                <h3>About</h3>
                <p className="ratarata">
                  SMA Negeri 1 Wates merupakan salah satu SMA yang sudah cukup
                  mempunyai nama besar, oleh karena itu SMA 1 Wates menjadi
                  sekolah favorit untuk masyarakat kabupaten Kulon Progo
                  khususnya dan Yogyakarta pada umumnya. Sejak tanggal 1 Agustus
                  1962 SMA Persiapan Negeri Wates, secara resmi berubah
                  statusnya menjadi SMA Negeri Wates. Berdasarkan cap sekolah
                  pada saat itu, SMA Negeri Wates merupakan SMA Negeri ke-212
                  untuk seluruh Indonesia, sehingga SMA Negeri Wates dikenal
                  sebagai SMA 212 atau kemudian berkembang dengan nama popular
                  menjadi SMA 212, atau SMA Casello atau SMA kalih setunggal
                  loro
                </p>
                <ul className="mt-5">
                  <li>
                    <BiCheckDouble className="icon" /> " Excellence is not being the best, but it is doing your best "
                  </li>
                  <li>
                    <BiCheckDouble className="icon" /> Keunggulan bukanlah yang terbaik, tetapi Keunggulan adalah melakukan yang terbaik
                  </li>
                  <li>
                    <BiCheckDouble className="icon" />
Jalan Terbahsari Nomor 1, Terbah, Wates, Kulon Progo, D.I. Yogyakarta 55651
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <section id="counts" class="counts">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-6 mt-5">
                  <div class="count-box">
                    <BiGroup className="iconCount" />
                    <span>
                      {counterOn && (
                        <CountUp start={0} end={563} duration={2} delay={0} />
                      )}
                    </span>
                    <p>Siswa</p>
                  </div>
                </div>

                <div class="col-lg-3 col-6 mt-5">
                  <div class="count-box">
                    <BiCube className="iconCount" />
                    <span>
                      {counterOn && (
                        <CountUp start={0} end={126} duration={2} delay={0} />
                      )}
                    </span>
                    <p>Tenaga Pendidik</p>
                  </div>
                </div>

                <div class="col-lg-3 col-6 mt-5 mt-lg-0">
                  <div class="count-box">
                    <BiSolidBuildings className="iconCount" />
                    <span>
                      {counterOn && (
                        <CountUp start={0} end={227} duration={2} delay={0} />
                      )}
                    </span>
                    <p>Fasilitas</p>
                  </div>
                </div>

                <div class="col-lg-3 col-6 mt-5 mt-lg-0">
                  <div class="count-box">
                    <BiBookBookmark className="iconCount" />
                    <span>
                      {counterOn && (
                        <CountUp start={0} end={22} duration={2} delay={0} />
                      )}
                    </span>
                    <p>Ekstrakurikuler</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>
        {/* <!-- End Counts Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" class="team">
          <div class="container">
            <div class="section-title">
              <h2>Team</h2>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="member">
                  <img src={irvan} alt="" />
                  <h4>Irvan Nasyakban</h4>
                  <span>210180187</span>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="member">
                  <img src={widia} alt="" />
                  <h4>Widia Hamsi</h4>
                  <span>210180184</span>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="member">
                  <img src={ari} alt="" />
                  <h4>Muhammad Ariansyah</h4>
                  <span>210180197</span>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="member">
                  <img src={fannisa} alt="" />
                  <h4>Fannisa Nadira</h4>
                  <span>210180156</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Team Section --> */}
      </main>

      <footer id="footer">
        <div className="footer-top d-flex justify-content-center">
          <div class="container d-md-flex py-4">
            <div class="me-md-auto text-center text-md-start">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>SMA 1 WATES</span>
                </strong>
                . All Rights Reserved
              </div>
              <div class="credits">
                Designed by{" "}
                <a href="https://bootstrapmade.com/">Irvan Nasyakban</a>
              </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="/dashboard" class="twitter">
                <BiLogoTwitter className="icon-footer" />
              </a>
              <a href="/dashboard" class="facebook">
                <BiLogoFacebook className="icon-footer" />
              </a>
              <a href="/dashboard" class="instagram">
                <BiLogoInstagram className="icon-footer" />
              </a>
              <a href="/dashboard" class="google-plus">
                <BiLogoGooglePlus className="icon-footer" />
              </a>
              <a href="/dashboard" class="linkedin">
                <BiLogoLinkedin className="icon-footer" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
