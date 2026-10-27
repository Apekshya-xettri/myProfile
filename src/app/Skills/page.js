import React from 'react'

const Skill = () => {
  return (
    <>
    {/* ---Sec 1-- */}
    <section id="skill-sec1">
        <div className='container'>
            <h1 className='fw-bold text-white text-center pt-2'>Skills Set</h1>

            <div className='floated-logos'>
                 <img src='/images/img.png' className='floated-img' id="img"></img>
                <img src='/images/react-2.png' className='floated-img' id="react"></img>
                <img src='/images/html5.jpg' className='floated-img' id="html"></img>
                <img src='/images/css.png' className='floated-img' id="css"></img>
                <img src='/images/javaScript.webp' className='floated-img' id="js"></img>
            </div>
            
        <div className="skills d-flex flex-column align-items-center">
            <h2>HTML 5</h2>
            <div className="progress-bar bg-white">
                <div className="html">
                    <span>90%</span>
                </div>
            </div>


            <h2>CSS 3</h2>
            <div className="progress-bar bg-white">
                <div className="css">
                    <span>80%</span>
                </div>
            </div>

            <h2>JavaScript</h2>
            <div className="progress-bar bg-white">
                <div className="js">
                    <span>70%</span>
                </div>
            </div>

            <h2>React JS</h2>
            <div className="progress-bar bg-white">
                <div className="react">
                    <span>70%</span>
                </div>
            </div>

            <h2>Tailwind</h2>
            <div className="progress-bar bg-white">
                <div className="tailwind">
                    <span>75%</span>
                </div>
            </div>

            <h2>Bootstrap</h2>
            <div className="progress-bar bg-white">
                <div className="bootstrap">
                    <span>80%</span>
                </div>
            </div>

            <h2>SAAS</h2>
            <div className="progress-bar mb-5 bg-white">
                <div className="sass">
                    <span>80%</span>
                </div>
            </div>

        </div>

        </div>
    </section>

    {/* ---sec 2--  */}
    <section>
        <div className='container'>
            <div className='text-center'>
        <img src="./images/fig.png" className='mx-auto img-fluid w-100'></img>
        </div>
        </div>
    </section>
    </>
  )
}

export default Skill;