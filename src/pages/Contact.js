import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import '../styles/contactPage.css'
import bannerImage from "../assets/contact-banner.png";

const Contact = () => {
    const email = "careercrew@gmail.com";
    const phone = "+012345678";
    const address = "Jalan Gombak, 53100, Selangor, Malaysia";
    return (

        <main className="Contact">
            <PageHeader
                small
                title="Contact Us"
                subtitle=""
                backgroundImage={bannerImage}
            />

            <section className="section Contact--Section1">
                <div className="container Contact--Section1--Container">
                    <div>

                        <div className="Contact--Details">
                            {address && (
                                <a
                                    className="Contact--Details--Item"
                                    href={`https://www.google.com.au/maps/search/${encodeURI(
                                        address
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MapPin /> {address}
                                </a>
                            )}
                            {phone && (
                                <a className="Contact--Details--Item" href={`tel:${phone}`}>
                                    <Smartphone /> {phone}
                                </a>
                            )}
                            {email && (
                                <a className="Contact--Details--Item" href={`mailto:${email}`}>
                                    <Mail /> {email}
                                </a>
                            )}
                        </div>
                    </div>

                    <div>
                        <FormSimpleAjax name="Simple Form Ajax" />
                    </div>
                </div>
            </section>
            <section className="section">

                <iframe className="Contact--map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15933.597983999613!2d101.7346695!3d3.2504767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf808897bf1163a3!2sInternational%20Islamic%20University%20Malaysia!5e0!3m2!1sen!2sbd!4v1618213220022!5m2!1sen!2sbd" height="450" allowFullScreen="" loading="lazy"></iframe>

            </section>

        </main>

    );
};

export default Contact;

