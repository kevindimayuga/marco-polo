import React from "react";

const ContactForm = () => {
    return (
        <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
            <h1>Contact Us</h1>
            <p>Send us a message</p>
        </div>
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label className="contact-label" for="name">Name</label>
                    <input className="form control contact-input" type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label className="contact-label" for="email">Email address</label>
                    <input className="form control contact-input" type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label className="contact-label" for="message">Message</label>
                    <textarea className="form-control contact-input" id="message" rows="3"></textarea>
                </div>
                <button type="submit" className=" contact-button btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default ContactForm;