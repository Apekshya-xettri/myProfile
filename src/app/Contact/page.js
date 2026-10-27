"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';



const Contact = () => {

    const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
     });

 const handleChange = (event) =>{
    setformData({
        ...formData,
        [event.target.name] : event.target.value
    });
 }

//  const handleSubmit = (event) =>{
//     event.preventDefault();
//     console.log(formData);

//     setformData({
//     firstName: "",
//     lastName: "",
//     email: "",
//     message: ""
//   });
//  }

const handleSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const text = await response.text();

  console.log("STATUS:", response.status);
  console.log("RESPONSE:", text);

  if (response.ok) {
    alert("Email sent successfully!");

    setformData({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  } else {
  alert("Status: " + response.status);
  console.log("Response status:", response.status);
  console.log("Response text:", text);
}
};

// export 
// async function POST(request) {
// const formData = await request.json();

//   console.log(formData);

//   return Response.json({ message: "Received!" });
// }

  return (
    <>
    <section>
        <div className='container'>
        <div className='d-flex justify-content-between my-5'>
            {/* ---Left Col Starts Here--- */}
        <div className='col-4 gap-3 mt-5'>
            <h2 className='fw-bold'>Contact Me</h2>
            <p className='fw-bold'>Get in touch with me via social media or send me an email.</p>
            <a href="" className="about-link fw-bold">
                <span className="icon-box">
                    <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <span>
                    Linked-In
                </span>
            </a>
            <a href="" className="about-link fw-bold">
                <span className="icon-box">
                    <FontAwesomeIcon icon={faGithub} />
                </span>
                <span>
                    Git-hub
                </span>
            </a>
            <a href="" className="about-link fw-bold">
                <span className="icon-box">
                  
                    <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span>
                    Gmail
                </span>
            </a>
        </div>
        {/* ---Left col ends here---- */}

        {/* ---Right Col Starts Here--- */}
        <div className='col-7'>
        <img src="/images/codepic.jpg" alt="Profile" />
        </div> cf

        </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="contact-bgImg text-center shadow-lg rounded-4 mb-5"> 
                <form className='mx-auto w-50' onSubmit={handleSubmit} >
                       <h2 className='pt-5 fw-bold'>Send me an Email</h2>
{/* -----first Name----*/}
<div className='py-2'>
    <label htmlFor="firstName">First Name</label>
    <input  type="text" id="firstName" className="form-control" name="firstName" onChange={handleChange}  value={formData.firstName}></input>
</div>
{/* ----Last Name-----  */}
<div className='py-2'>
    <label htmlFor="LastName">Last Name</label>
    <input  type="text" id="LastName" className="form-control" name="lastName" onChange={handleChange}  value={formData.lastName}></input>
</div>
{/* -----Email---------- */}
<div className='py-2'>
    <label htmlFor="email">Email</label>
    <input  type="text" id="email" className="form-control" name="email" onChange={handleChange}  value={formData.email}></input>
</div>
{/* -----message Box----- */}
<div className="pb-5 py-2">
  <label htmlFor="message" className="form-label">
    Message
  </label>

  <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    className="form-control"
    rows="5"
    placeholder="Write your message"
    style={{
        textAlign: "center",
        paddingTop: "3rem"
    }}>

    </textarea>
</div>
{/* -----Send Button---- */}

<button type="submit" className="btn btn-dark shadow mb-5 fw-bold">
  Submit
</button>
                </form>
         {/* ----FORM ENDS HERE----- */}
            </div>
        </div>
    </section>
    </>
    
  )
}

export default Contact;