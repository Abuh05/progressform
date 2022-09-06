import React, { useState } from 'react'

const Form = () => {
    const [page, setPage] = useState(0);


    const FormTitles = ["Sign Up",  "Personal Info", "Other" ];
  return (
    <div className='form'>
        <div className='progressbar'></div>
        <div className='form-container'></div>
        <div className='header'>
            <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'></div>
        <div className='footer'></div>

        <button onClick={() => {setPage((currPage) => currPage - 1)}}>Prev</button>
        <button onClick={() => {setPage((currPage) => currPage + 1)}}>Next</button>
    </div>
    
  )
}

export default Form