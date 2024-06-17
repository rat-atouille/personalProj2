import React, { useState } from 'react';
import './Functionality.css';
import play_btn from "../../assets/play.png";
import pause_btn from "../../assets/pause.png";
import search_btn from "../../assets/search_icon.png";

const Functionality = ({ setPlayStatus, mess, playStatus, pageCount, setPageCount }) => {
  const [inputValue, setInputValue] = useState("");
  const [easterEgg, setEasterEgg] = useState(false);
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 
  const [animation, setAnimation] = useState(''); 
  const [newPage, setNewPage] = useState(false);

  const search = () => {
    if (inputValue === "dev's_fav") {
      setEasterEgg(true);
      setPageCount(1);
      setResults([]);
      setNewPage(true);
    } else if (inputValue != '') {
      setEasterEgg(false);
      setPageCount(1);
      fetchMovies(inputValue);
      setNewPage(true);
    } else if (inputValue == ''){
      setNewPage(false);
      setResults([]);
    }if (newPage && results != []) {
      setAnimation('slideOutLeft');
      setTimeout(() => {
        setCurrentPage(1);
        setAnimation('slideInRight');
      }, 500); 
    }
  };

  const fetchMovies = (query) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    };
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`, options)
      .then(response => response.json())
      .then(data => {
        setResults(data.results);
        console.log(data.results);
      })
      .catch(err => console.error(err));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePageDotClick = (page) => {
    if (page === 0) {
      setAnimation('slideOutRight');
      setTimeout(() => {
        setCurrentPage(0);
        setAnimation('slideInLeft');
      }, 500);
    } else if (page === 1) {
      setAnimation('slideOutLeft');
      setTimeout(() => {
        setCurrentPage(1);
        setAnimation('slideInRight');
      }, 500);
    }
    setPageCount(page);
  };

  return (
    <div className='func'>
      <div className='play'>
        <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_btn : play_btn} alt="play/pause"/>
      </div>

      <div className={`pageOne ${currentPage === 0 ? animation : ''}`} style={{ display: currentPage === 0 ? 'block' : 'none' }}>
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
            <img src={search_btn} alt="search"/>
          </button>
        </div>
      </div>

      <div className={`pageTwo ${currentPage === 1 ? animation : ''}`} style={{ display: currentPage === 1 ? 'block' : 'none' }}>
        <div className="card-container">
          {results.map((movie) => (
            <div key={movie.id} className='card'>
              <div className='poster'>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
              </div>
              <p className='title'>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='page-dots-display'>
        <ul className={ newPage ? 'page-dots' : 'none'}>
          <li onClick={() => handlePageDotClick(0)} className={pageCount === 0 ? "dot red" : "dot"}></li>
          <li onClick={() => handlePageDotClick(1)} className={pageCount === 1 ? "dot red" : "dot"}></li>
        </ul>
      </div>

    </div>
  );
};

export default Functionality;
