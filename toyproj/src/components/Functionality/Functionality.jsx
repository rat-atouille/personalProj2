import React, { useState } from 'react';
import './Functionality.css';
import play_btn from "../../assets/play.png";
import pause_btn from "../../assets/pause.png";
import search_btn from "../../assets/search_icon.png";

const Functionality = ({
  setPlayStatus, mess, 
  messCount, setMessCount, 
  playStatus, pageCount, setPageCount
}) => {
  const [inputValue, setInputValue] = useState("");
  const [easterEgg, setEasterEgg] = useState(false);

  const search = () => {
    if (inputValue === "dev's_fav") {
      setEasterEgg(true);
      setPageCount(1);
    } else {
      setEasterEgg(false);
      console.log("not easter");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='func'>
      <div className='pageOne'>
        <div className='ftext'>
          <h1>{mess.text1}</h1>
          <h2>{mess.text2}</h2>
        </div>
        <div className='search-box'>
          <input 
            type="text" 
            id="input-box" 
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={search}>
            <img src={search_btn}/>
          </button>
        </div>
      </div>

      <div className = 'pageTwo'>
        <div className = 'card'>
          <div className='poster'>
            <img src = ""></img>
          </div>
          <p className='title'>Inside Out</p>
        </div>

      </div>
      
      <div className='page-dots-display'>
        <ul className={easterEgg?'page-dots': 'none'}>
          <li onClick={() => setPageCount(0)} className={pageCount === 0 ? "dot red" : "dot"}></li>
          <li onClick={() => setPageCount(1)} className={pageCount === 1 ? "dot red" : "dot"}></li>
        </ul>
      </div>

      <div className='play'>
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_btn:play_btn}/>
      </div>
    </div>
  );
};

export default Functionality;
