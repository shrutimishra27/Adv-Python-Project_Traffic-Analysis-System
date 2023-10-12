import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

document.getElementById("chat").addEventListener("click", function() {
    // Handle the click event here
    Chatbot();
});

function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const userInputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const sendMessage = () => {
    if (userMessage.trim() !== '') {
      // Add the user message to the chat messages
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, isUser: true },
      ]);

      // Clear the input field
      setUserMessage('');

      // Scroll the chat container to the bottom
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;

      // Determine bot response based on user input
      const botResponse = getBotResponse(userMessage);

      // Add the bot response to the chat messages
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, isUser: false },
      ]);

      // Scroll the chat container to the bottom after adding the bot message
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const getBotResponse = (userInput) => {
    // Define responses for specific user inputs
    switch (userInput.toLowerCase()) {
      case 'hello':
        return 'Hello! How can I assist you today?';
      case 'hi':
        return 'Hello! How can I assist you today?';
    
      case 'how are you?':
        return "I'm fine. How can I assist you today?";
    
      case 'i am sad':
        return 'I am here to listen to you. Why are you feeling sad?';
    
      case 'i am feeling low':
        return 'I am here for you. Can you tell me what has been bothering you?';
    
      case 'cheer me up':
        return 'I would love to help cheer you up! What makes you the most happy? Think about those moments when you achieved something great.';
    
      case 'how do I overcome stress':
        return 'To overcome stress, try taking a few deep breaths, relax, and share what is on your mind. We can work through it together.';
    
      case 'tell me about anxiety':
        return 'Anxiety is a common feeling of unease, such as worry or fear, that can be mild or severe. It iss important to talk about it and seek support.';
    
      case 'what is depression?':
        return 'Depression is a mental health condition that causes persistent feelings of sadness and loss of interest in activities. It can be treated, and seeking help is essential.';
    
      case 'how can I improve my mental health?':
        return 'Improving mental health involves self-care, seeking support from loved ones, and, if necessary, professional help. What specific areas would you like to work on?';
    
      case 'i need someone to talk to':
        return 'I am here to listen and chat with you. You can share anything on your mind.';
    
      case 'thank you':
        return 'You\'re welcome! If you have more questions or need assistance in the future, feel free to reach out.';
    
      case 'goodbye':
        return 'Goodbye! Take care and have a great day!';
    
      case 'what are some relaxation techniques?':
        return 'Relaxation techniques include deep breathing, meditation, progressive muscle relaxation, and mindfulness exercises. Would you like to try one?';
    
      case 'how can I manage stress at work?':
        return 'Managing stress at work involves setting boundaries, prioritizing tasks, taking short breaks, and seeking support from colleagues or supervisors.';
    
      case 'tell me about self-care':
        return 'Self-care is essential for mental health. It includes activities like exercise, getting enough sleep, eating well, and doing things you enjoy.';
    
      case 'what are the symptoms of burnout?':
        return 'Symptoms of burnout may include exhaustion, cynicism, reduced performance, and physical health problems. If you suspect burnout, it is important to address it.';
    
      case 'how can I help a friend with mental health issues?':
        return 'Supporting a friend with mental health issues involves listening, offering help, and encouraging them to seek professional assistance if needed.';
      
      case 'i think i am addicted to drugs':
        return 'It\'s important to talk to someone who can, though, such as a mental health professional or a trusted person in your life. Also you can meditate daily to distract your focus from these things. You can use our meditation help feature.';
      
      case 'What are the common symptoms of depression?':
        return 'Common symptoms of depression include persistent sadness, loss of interest in activities, changes in appetite or weight, sleep disturbances, and feelings of worthlessness. If you\'re experiencing these symptoms, it\'s important to seek help from a mental health professional.';
      
      case 'What is the difference between generalized anxiety disorder and social anxiety disorder?':
        return 'Generalized anxiety disorder involves excessive worry about various aspects of life, while social anxiety disorder is characterized by an intense fear of social situations. Both can be treated with therapy and, in some cases, medication.';
      
      case 'Are there self-help strategies for managing anxiety?':
        return 'Yes, self-help strategies like deep breathing exercises, mindfulness, and progressive muscle relaxation can help manage anxiety. However, it\'s essential to consult a mental health professional for a personalized treatment plan.';
      
      case "how can i tell if i have a substance abuse problem?":
        return "Signs of substance abuse may include a loss of control over drug or alcohol use, neglecting responsibilities, withdrawal symptoms, and failed attempts to quit. It's crucial to seek professional help if you suspect a problem.";
    
      case "what are some treatment options for substance abuse?":
        return "Treatment options for substance abuse include detoxification, counseling, therapy, and support groups. Your specific treatment plan will depend on the substance you're abusing and your individual needs.";
    
      case "what is bipolar disorder, and how is it diagnosed?":
        return "Bipolar disorder involves extreme mood swings between manic and depressive episodes. It's diagnosed through a comprehensive evaluation by a mental health professional, including a review of your symptoms and medical history.";
    
      case "can bipolar disorder be managed without medication?":
        return "In some cases, therapy and lifestyle changes can help manage bipolar disorder. However, many individuals require medication to stabilize mood swings. It's essential to work with a psychiatrist to determine the best approach.";
    
      case "what are the different types of eating disorders?":
        return "There are several eating disorders, including anorexia nervosa, bulimia nervosa, and binge-eating disorder. Each has its own set of symptoms and treatment approaches.";
    
      case "how can i support a loved one with an eating disorder?":
        return "Supporting someone with an eating disorder involves being non-judgmental, encouraging them to seek professional help, and avoiding comments about their appearance. Eating disorders can be complex, so professional treatment is essential.";
    
      case "What are some coping strategies for dealing with depression?":
        return "Coping strategies for depression include exercise, maintaining a routine, seeking social support, practicing mindfulness, and considering therapy or medication.";
  
      case "Can children and teenagers experience depression?":
        return "Yes, depression can affect individuals of all ages, including children and teenagers. It's important to seek professional help if you suspect a child or teenager is struggling with depression.";
    
      case "How can I manage panic attacks caused by anxiety?":
        return "During a panic attack, focus on deep breathing, grounding techniques, and remind yourself that the panic will pass. Long-term management includes therapy, medication, and stress reduction strategies.";
    
      case "What are the common signs of substance withdrawal?":
        return "Common signs of substance withdrawal can include cravings, mood swings, nausea, sweating, and physical discomfort. Medical supervision may be necessary during withdrawal.";
    
      case "What are the treatment options for anorexia nervosa?":
        return "Treatment for anorexia nervosa often involves a combination of therapy, nutritional counseling, and medical monitoring. In severe cases, hospitalization may be necessary.";
    
      case "How can I help someone who refuses treatment for their mental health disorder?":
        return "It can be challenging, but you can offer support, encourage open communication, and educate them about the benefits of treatment. Ultimately, they must make the decision to seek help.";
    
      case "What are some self-care practices for maintaining mental well-being?":
        return "Self-care practices include getting enough sleep, eating well, exercising regularly, managing stress, and engaging in hobbies and activities that bring joy.";
       
      default:
        return "Sorry, I don't understand that request. Please feel free to ask another question or share how you're feeling.";
    }
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleInputKeyUp = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // useEffect(() => {
  //   // Focus on the input field when the component mounts
  //   userInputRef.current.focus();
  // }, []);

  return (
    <div className="outer-div">
      <div className="chatbot-heading">
        <h1>Chatbot</h1>
        <hr />
      </div>
      <br />
      <div className="chat-container" ref={chatContainerRef}>
        {chatMessages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="submit-container">
        <input
          type="text"
          id="user-input"
          ref={userInputRef}
          placeholder="Type your message..."
          value={userMessage}
          onChange={handleInputChange}
          onKeyUp={handleInputKeyUp}
        />
        <button id="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Chatbot;
