import React from 'react'
import { useNavigate , Link } from "react-router-dom";
import './Chatbot_section.css';

// import chatimg from "../../../assets/CHATBOT-image.jpg";


function Chatbot_section() {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate("/Chatbot");
      };
    return (
        <>
            <div className='main-chatbot'>
                <div className='chatbot-content-class'>
                    <h1>Our AI Assistance</h1>
                    <hr className='underline-heading' />
                    <br />
                    <div>The 'Chat with AI' feature on our website is a user-friendly tool that leverages artificial intelligence technology to enhance the user experience and provide valuable healthcare information and support. This feature allows visitors to engage in interactive conversations with a virtual AI assistant, designed to simulate natural human communication.</div>
                    <br />
                    <div className="bot-button">
                        <button onClick={handleChange} className='bot-btn2' type='button'>
                            Chat with AI
                        </button>
                    </div>
                </div>
                <div className='img-chatbot-class'>
                    <img src={chatimg} alt="chat-bot-img" className='bot-img' />
                </div>
                
            </div>
        </>
    );
}

export default Chatbot_section;