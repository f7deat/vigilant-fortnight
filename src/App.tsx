import './App.css';
import { useState } from 'react';
import IMessage from './models/message';
import { MD5 } from 'crypto-js';
import { SidebarItem } from './components/sidebar';
import { Brand } from './components/brand';
import { Help } from './components/help';
import hash from './configs/hash.json'

function App() {

  const [messages, setMessages] = useState<IMessage[]>([])
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<string>(hash.MD5)

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const handleChat = () => {
    let newMessages = [...messages]
    newMessages.push({
      message: message,
      fromBot: false,
      type: type
    })
    if (message.toLowerCase() === 'guid') {
      newMessages.push({
        message: uuidv4(),
        fromBot: true
      })
    } else {
      let hash = MD5(message);
      newMessages.push({
        fromBot: true,
        message: hash.toString()
      })
    }
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
          <Brand />
          <SidebarItem name="MD5" setType={setType} type={type} />
          <SidebarItem name="SHA-1" setType={setType} type={type} />
          <SidebarItem name="SHA-2" setType={setType} type={type} />
          <SidebarItem name="SHA-3" setType={setType} type={type} />
          <SidebarItem name="RIPEMD-160" setType={setType} type={type} />
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
            <Help />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
