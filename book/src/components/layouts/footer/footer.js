import React from 'react';
import './footer.styles.css';

const footer = () =>{
    return(
        <section className='footer-container'>
            <div className='container'>
                <h2>If you have any questions feel free to ask</h2>

                <form className='footer-form'>
                    <div className='form-group'>
                        <label htmlFor="name" className='form-label'>Name: </label>
                        <input type='text' id="name" className='form-input' placeholder='Enter your name'/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email' className='form-label' >Email: </label>
                        <input type='email' id="email" className='form-input' placeholder='Enter your email'/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='Question' className='form-label'>Question: </label>
                        <textarea className='form-input' id="Question" placeholder='Type your Question'>

                        </textarea>
                    </div>

                    <div className='form-group'>
                        <a href='a' className='form-submit'>Submit</a>
                    </div>
                </form>
                <p>&copy; 2023 BookStore. All Rights Reserved</p>

            </div>
        </section>
    )
}

export default footer;