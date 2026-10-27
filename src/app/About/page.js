import React from 'react';
import Button from "../Components/Button";
// import { useState } from "react";

const About = () => {
  return (
    // <main>
        <section>
            <div className='container'>
            <div className='row gap-3 my-5'>

                {/* -----Left Column  Starts Here------- */}
                <div className='col-lg-4 leftCol'>
                <img  
                className='w-100'
                src="/images/profile.jpeg" 
                alt="ProfilePicture"
                style={
                    {
                        boxShadow: "0.5 rem 0.5rem  10px 2px #EBEBEB",
                        borderRadius: "10%"
                    }
                }>
                </img>
                </div>


    {/* -----Right Column  Starts Here------- */}
                <div className=' col-lg-7 RightCol mt-5'>
                    <h2 className='fw-bold'>Hello! <br/>
                    I'm Apekshya,<br/>
                    Front End Engineer based in USA.
                    </h2>
                    <p>I’m a passionate Frontend Developer with a Bachelor’s degree in Information Technology and a strong interest in building modern, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, React, and Next.js, and I’m continuously expanding my skills in TypeScript, APIs, Git, and modern frontend development practices.
                    I enjoy turning ideas and designs into clean, functional, and accessible interfaces. I focus on writing reusable, maintainable code and creating responsive experiences that work well across different devices. I’m currently building practical projects to strengthen my development skills and am excited to contribute to a professional team, learn from experienced developers, and grow as a Software Engineer.</p>
                    <Button/>
                </div>
            </div>
            </div>
        </section>
    // </main>
  )
}

export default About;