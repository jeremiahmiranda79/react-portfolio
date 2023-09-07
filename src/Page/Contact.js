// import { useState } from "react";
import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '', 
        message: ''
    })

    const [buttonText, setButtonText] = useState('Submit');

    const form = useRef();

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.name, e.target.value);
        setFormState({ ...formState, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
        emailjs.sendForm('service_i3q79o7', 'template_ndi0r6f', form.current, '8RMCTXyo44Ch-Bv_c')
        .then((result) => {
            console.log(result.text);
            setButtonText('Message Sent!');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }, (error) => {
            console.log(error.text);
            setButtonText('Error!');
        });
    }

    return (
        <div className="contact">
            <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label 
                        htmlFor="name" 
                        className="form-label">
                            Name
                    </label>

                    <input 
                        type="text" 
                        name="name"
                        className="form-control" 
                        placeholder="name.." 
                        defaultValue={formState.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label 
                        htmlFor="email" 
                        className="form-label">
                            Email address
                    </label>
                    
                    <input 
                        type="email" 
                        name='email'
                        className="form-control" 
                        placeholder="email.." 
                        defaultValue={formState.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>

                    <textarea 
                        name="message"
                        className="form-control" 
                        rows="3"
                        defaultValue={formState.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <center>
                    <button type="submit" className="btn btn-info">{buttonText}</button>
                </center>
               
            </form>
        </div>
    )
}

export default Contact