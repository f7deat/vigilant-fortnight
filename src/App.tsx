import { useState } from 'react';
import './App.css';
import CryptoJS from 'crypto-js';


function App() {

  const [hashValue, setHashValue] = useState<string>('')

  function handleChange(value: string) {
    var md5Hash = CryptoJS.MD5(value);
    setHashValue(md5Hash.toString());
  }

  return (
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
      <div className="h-screen">
        <div className="heading">
          <h1>Transactions</h1>
          <input className="search"/>
        </div>
        <div>{hashValue}</div>
        <input onChange={(e: any) => handleChange(e.target.value)} className="form-control"/>
      </div>
      </div>
    </div>
  );
}

export default App;
