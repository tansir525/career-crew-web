import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";
import Accordion from "../components/Accordion";
import bannerImage from "../assets/banner-home.png";
import sectionbannerImage from "../assets/section-banner.png";
import serviceImg1 from "../assets/IELTS Online.png";
import serviceImg2 from "../assets/Preparation Classes.png";
import serviceImg3 from "../assets/Mock Test.png";
const imageArray = [
  {
    image: serviceImg1,
    title: "IELTS Courses",
    alt: "IELTS Courses",
  },
  {
    image: serviceImg2,
    title: "Online Classes",
    alt: "Online Classes",
  },
  {
    image: serviceImg3,
    title: "Online Live Session",
    alt: "Online Live Session",
  },
];

const accordion = [
  {
    title: "Our Mission",
    description:
      "Create a responsive web platform for the learners Provide with a blended learning environment by offering both Synchronous and Asynchronous learning method",
  },
  {
    title: "Our Vision",
    description:
      "CareerCrew vision is to build a global platform and connected community to guide international students along their journey to achieve their lifelong learning and career aspirations.",
  },
];

const Home = () => {
  return (
    <main className="Home">
      <PageHeader
        large
        title="Career Crew"
        subtitle="Cultivating Excellence, Ingenuity and Creativity"
        backgroundImage={bannerImage}
      />

      <section className="section">
        <div className="container">
          <h2>Welcome to CareerCrew</h2>
          <p>
            CareerCrew is an online platform that offer the potential IELTS
            learner to prepare themselves at home throughout self-pace or
            interactive online classes. We also offer the students with beginner
            to expert level speaking or writing courses to improve their English
            proficiency skills.
          </p>
          <p>
            Digital revolution has brought remarkable change in every aspect of
            life and self-initiated learning is one of them. This self-initiated
            learning process is known as web-based learning or e-learning
            E-learning is not a new concept, but it is mushrooming and due to
            the current crisis due to covid-19, it is becoming the at most
            medium of teaching and learning. It provides one with the scope of
            personal development and generates new career goals and educational
            opportunities in the global world. In order to perceive
            international experience, either for work or education - both come
            with its fair share of formalities to deal with and language
            proficiency is crucial for both academic and corporate to
            communicate. When it comes to taking language proficiency tests,
            there are many options to choose from. However, IELTS is one of the
            most compatible options to select because it provides both general
            and academic training that fits the purpose of either work,
            education or immigration.{" "}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container--flex Marginauto container">
          <div>
            <iframe
              className="home--iframe"
              height="300"
              src="https://www.youtube.com/embed/-6F1Guqx_h0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="Padding--homesection">
            <h2>Why CareerCrew ?</h2>
            <span>
              &#9830; If you choose CareerCrew , we ensure 100% Support. <br />
              &#9830; Proven systems and techniques that really works. <br />
              &#9830; High student satisfaction rate. <br />
              &#9830; Audio and transcripts. <br />
              &#9830; International Standard Teaching quality. <br />
              &#9830; Updates Handouts in every Class <br />
              &#9830; Vocabulary Handouts. <br />
              &#9830; Spoken Audio Book. <br />
              &#9830; Cozy Environment with utmost care. <br />
              &#9830; 1:1 Problem Solving Session.
            </span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Our Services</h2>
          <Gallery images={imageArray} />
        </div>
      </section>

      <PageHeader
        smaill
        title=""
        subtitle=""
        backgroundImage={sectionbannerImage}
      />
      <section className="section">
        <div className="container">
          <Accordion items={accordion} />
        </div>
      </section>
      <section className="section">
        <h2 className="taCenter">
          Feel free to Join our Courses Now
          <br />
          <Link
            to="/login"
            className="Button"
            tabIndex="0"
            aria-label="Toggle Popup"
            role="button"
          >
            Apply Now
          </Link>
        </h2>
      </section>
    </main>
  );
};

export default Home;
