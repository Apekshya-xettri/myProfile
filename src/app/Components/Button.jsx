import React from 'react'

const Button = () => {
  return (
    <div>
        <button className="rounded-1" style={
            {backgroundColor: "black",
            marginTop: "1rem",
            padding: "0.3rem 0.6rem",
            boxShadow: "0px 0px 15px 3px #8d8989"
            }
        }>
            <a href="https://www.linkedin.com/feed/" className="fw-bold text-white"> View LinkedIn</a>
        </button>
    </div>
  )
}

export default Button;