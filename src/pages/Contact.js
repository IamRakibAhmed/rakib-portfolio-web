// src/pages/Contact.js
import React, { useState } from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_08di95j',
            'template_tiel8rf',
            formData,
            'Mx4BA4FMfZhETZJwc')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <Section id="contact" title="Contact Me" icon={<i className="fas fa-envelope"></i>}>
            <ContactContainer>
                <FormWrapper>
                    <Form onSubmit={handleSubmit}>
                        <InputWrapper>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <TextArea
                                id="message"
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="10"
                            />
                        </InputWrapper>
                        <Button type="submit">Send</Button>
                    </Form>
                </FormWrapper>
                <MapWrapper>
                    <Map
                        title="Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848456774829!2d90.36881311543297!3d23.750887694643987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf570b4ddbe1%3A0xfeb3f62ae6931bb9!2sMirpur%2C%20Dhaka%201216%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1597998936914!5m2!1sen!2sus"
                        width="100%"
                        height="430"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </MapWrapper>
            </ContactContainer>
        </Section>
    );
};

const ContactContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const FormWrapper = styled.div`
    flex: 1;
    max-width: 100%;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
`;

const Form = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #fff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 50px; /* Rounded corners for capsule design */
    font-size: 1rem;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Small shadow */
    transition: box-shadow 0.3s;

    &:focus {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
`;

const TextArea = styled.textarea`
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 20px; /* Rounded corners for capsule design */
    font-size: 1rem;
    resize: vertical;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Small shadow */
    transition: box-shadow 0.3s;

    &:focus {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
`;

const Button = styled.button`
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 50px; /* Capsule design */
    background-color: #FFBE24;
    color: #000;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #DC9B00;
        color: #fff;
    }
`;

const MapWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 1rem;
    background: #fff;
    border-radius: 15px; /* More rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Map = styled.iframe`
    border-radius: 15px; /* More rounded corners */
    width: 100%;
`;

export default Contact;
