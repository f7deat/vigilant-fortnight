import './App.css';
import packageJson from '../package.json';
import { useState } from 'react';
import IMessage from './models/message';

function App() {

  const [messages, setMessages] = useState<IMessage[]>([])
  const [message, setMessage] = useState<string>('')

  const handleChat = () => {
    let newMessages = [...messages]
    newMessages.push({
      message: message,
      type: true
    })
    setMessages(newMessages)
    setMessage('')
  }

  function handleEnter(e:any) {
    if (e.key === 'Enter') {
      handleChat()
    }
  }

  return (
    <div>
      <div className="flex">
        <nav className="sidebar">
          <div className="sidebar-item active">
            <i className="fab fa-slack"></i> Transactions
          </div>
          <div className="sidebar-item">
            <i className="fab fa-slack-hash"></i> MD5 Hash
          </div>
        </nav>
        <div className="flex-grow">
          <div className="flex">
            <div className="board">
              <div className="message">
                {
                  messages?.map((value: IMessage, index: number) => (
                    <div key={index}>{value.message}</div>
                  ))
                }
              </div>
              <div className="chat-area">
                <div className="chat-input-wrapper">
                  <input className="chat-input" value={message} onChange={(e: any) => setMessage(e.target.value)} onKeyPress={(e: any) => handleEnter(e)}/>
                  <button className="btn-send" onClick={handleChat}><i className="far fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
            <div className="heading">
              <div className="title">
                <h1>Transactions</h1>
                <small>{packageJson.version}</small>
              </div>
              <div className="search-wrapper">
                <input className="search" placeholder="Search something..." />
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
