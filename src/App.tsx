import './App.css';
import packageJson from '../package.json';
import { useState } from 'react';
import IMessage from './models/message';
import { MD5 } from 'crypto-js';

function App() {

  const [messages, setMessages] = useState<IMessage[]>([])
  const [message, setMessage] = useState<string>('')

  const handleChat = () => {
    let newMessages = [...messages]
    newMessages.push({
      message: message,
      fromBot: false
    })
    let hash = MD5(message);
    newMessages.push({
      fromBot: true,
      message: hash.toString()
    })
    setMessages(newMessages)
    setMessage('')
  }

  function handleEnter(e: any) {
    if (e.key === 'Enter') {
      handleChat()
    }
  }

  return (
    <div>
      <div className="flex">
        <nav className="sidebar">
          <div className="brand">
            <i className="fab fa-slack fa-2x"></i>
            <div>
              <div className="brand-name">Vigilant Fortnight</div>
              <div className="brand-sologan">by <a href="https://fb.me/tan.dct" target="_blank" rel="noreferrer">tandc</a></div>
            </div>
          </div>
          <div className="sidebar-item active">
            <i className="fab fa-slack-hash"></i> MD5
          </div>
          <div className="sidebar-item">
            <i className="fab fa-slack-hash"></i> SHA-1
          </div>
          <div className="sidebar-item">
            <i className="fab fa-slack-hash"></i> SHA-2
          </div>
          <div className="sidebar-item">
            <i className="fab fa-slack-hash"></i> SHA-3
          </div>
          <div className="sidebar-item">
            <i className="fab fa-slack-hash"></i> RIPEMD-160
          </div>
        </nav>
        <div className="flex-grow">
          <div className="flex">
            <div className="board">
              <div className="message">
                {
                  messages?.map((value: IMessage, index: number) => (
                    <div key={index} className="message-item">
                      <div className={value.fromBot ? 'message-from-bot' : ''}>{value.fromBot ? value.message : ''}</div>
                      <div className={value.fromBot ? '' : 'message-from-user'}>{value.fromBot ? '' : value.message}</div>
                    </div>
                  ))
                }
              </div>
              <div className="chat-area">
                <div className="chat-input-wrapper">
                  <input className="chat-input" value={message} onChange={(e: any) => setMessage(e.target.value)} onKeyPress={(e: any) => handleEnter(e)} />
                  <button className="btn-send" onClick={handleChat}><i className="far fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
            <div className="help">
              <div className="title">
                <h2>Help</h2>
                <small>{packageJson.version}</small>
              </div>
              <div className="search-wrapper">
                <input className="search" placeholder="Search something..." />
                <i className="fas fa-search"></i>
              </div>
              <div className="help-content">
                MD5 is a widely used hash function. It's been used in a variety of security applications and is also commonly used to check the integrity of files. Though, MD5 is not collision resistant, and it isn't suitable for applications like SSL certificates or digital signatures that rely on this property.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
