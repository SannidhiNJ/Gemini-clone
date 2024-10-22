import React, { useContext, useState } from 'react';
import './SideBar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);    
    await onSent(prompt);
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <img 
          onClick={() => setExtended(prev => !prev)}
          className='menu' 
          src={assets.menu_icon} 
          alt="menu"
        />
    
        <div onClick={() => newChat()} className='newChat'>
          <img src={assets.plus_icon} alt="plus"/>
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className='recent_title'>Recent</p>
            {prevPrompt.map((item, index) => (
              <div 
                key={index} 
                onClick={() => loadPrompt(item)} 
                className='recentEntry'
              > 
                <img src={assets.message_icon} alt="message icon"/>
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SideBar;
