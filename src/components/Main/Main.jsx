import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
  const { onSent, recentPrompt, ShowResult, loading, resultData, setInput, input, setRecentPrompt } = useContext(Context);

  // Define an array of card data with text and image
  const cardData = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip",
      image: assets.compass_icon
    },  
    {
      text: "Briefly summarize this concept: urban planning",
      image: assets.bulb_icon
    },
    {
      text: "Brainstorm team bonding activities for our work retreat",
      image: assets.message_icon
    },
    {
      text: "Tell me about React js and React native",
      image: assets.code_icon
    }
  ];

  return (
    <div className='main'>
      <div className='navig'>
        <p> Gemini </p>
        <img src={assets.user_icon} />
      </div>
      <div className='mainContainer'>
        {!ShowResult ? (
          <>
            <div className='greet'>
              <p> <span> Hello,</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className='cards'>
              {cardData.map((card, index) => (
                <div 
                  key={index} // index: Represents the current position of card in the 
                                   //cardData array. It starts at 0 and increases by 1 for each item.

                  className='card' 
                  onClick={() => {
                    setRecentPrompt(card.text); // Update recentPrompt
                    onSent(card.text); // Send the prompt
                  }}
                >
                  <p>{card.text}</p>
                  <img src={card.image} alt="icon" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="resultTitle">
              <img src={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="resultdata">
              <img src={assets.gemini_icon}/>
              {loading ? (
                <div className='loader'>
                  <hr/>
                  <hr/>
                  <hr/>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </div>
        )}
        <div className="mainBottom">
          <div className="searchBox">
            <input 
              onChange={(e) => setInput(e.target.value)} 
              value={input} 
              type="text" 
              placeholder='Enter prompt here' 
            />
            <div>
              {input ? <img onClick={() => onSent()} src={assets.send_icon} /> : null}
            </div>
          </div>
          <p className='bottomInfo'> Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
