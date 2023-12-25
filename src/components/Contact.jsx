import "./Contact.css";
import { useState } from "react";
function Contact() {
  const [contact, setcontact] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [val,setVal]=useState("");
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setcontact({
      ...contact,
      [name]: value,
    });
  };
  const hanlesubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:5000/api/auth/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      setTimeout(() => setVal("sent"), 1000);
      setTimeout(() => setVal(""), 3000);
      
    } catch (err) {
     
    }
  };

  return (
    <section
      className="contact"
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="linear"
      id="contact"
    >
      <h1 className="contact-text">
        CONTACT <span>ME</span>
      </h1>
      <div className="container-fluid main_menu">
        <div className="row">
          <div className="col-md-10 col-sm-8 col-12 mx-auto">
            <div className="row" id="row2">
              <div
                className="qwerty col-lg-6 col-12 "
                id="contact-details"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="linear"
              >
                <h3>GET IN TOUCH</h3>
                <p>
                  Interested in working with me :) or wanna meet up for some
                  chitchat? I love meeting and working with new people. Hit me
                  up through the form below.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ color: "#ffffff" }}
                        ></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location
                      </td>
                      <td className="td">:&nbsp;Guntur,Andhra Pradesh,India</td>
                    </tr>
                    <tr>
                      <td>
                        <i
                          className="fa-solid fa-envelope"
                          style={{ color: "#ffffff" }}
                        ></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email
                      </td>
                      <td className="td">:&nbsp;sasichandan34@gmail.com</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <i
                          className="fa-solid fa-user-graduate"
                          style={{ color: "#ffffff" }}
                        ></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education
                      </td>
                      <td className="td">
                        :&nbsp;National Institute of Technology,Raipur
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <i
                          className="fa-solid fa-phone"
                          style={{ color: "#ffffff" }}
                        ></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mobile Number
                      </td>
                      <td className="td">:&nbsp;+91 9014742232</td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <i
                          className="fa-solid fa-earth-asia"
                          style={{ color: "#ffffff" }}
                        ></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Languages
                      </td>
                      <td className="td">:&nbsp;English,Hindi,Telugu</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                className=" col-lg-6 col-12 "
                id="contact-details"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="linear"
              >
                <form onSubmit={hanlesubmit}>
                  <div className="row" id="row1">
                    <div className="col-6 mx-auto">
                      {" "}
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={contact.username}
                        onChange={handleInput}
                        placeholder="  YOUR NAME"
                      ></input>
                    </div>
                    <div className="col-6 mx-auto">
                      {" "}
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={contact.email}
                        onChange={handleInput}
                        placeholder="YOUR EMAIL"
                      ></input>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={contact.subject}
                    onChange={handleInput}
                    placeholder="  ENTER SUBJECT"
                  ></input>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    value={contact.message}
                    onChange={handleInput}
                    placeholder="  YOUR MESSAGE HERE"
                    rows="10"
                  ></textarea>
                  <div className="but">
                    <button type="submit" className="but-button">
                      &nbsp;&nbsp;<b>{val}</b>&nbsp;&nbsp;
                      <i className="fa-brands fa-telegram fa-2x"></i>
                      &nbsp;&nbsp;
                    </button>
                  </div>{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
