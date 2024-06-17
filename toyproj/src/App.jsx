import React, { useState, useEffect } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Functionality from "./components/Functionality/Functionality";

const App = () => {
  const mess = [
    { text1: "Hello there!", text2: "What movie are you searching for today?" },
    { text1: "Welcome", text2: "Did you prepare popcorn?" },
  ];

  const [messCount, setMessCount] = useState(0);
  const [num, setNum] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    const randomNum = randomNumber(3);
    setNum(randomNum);
    setMessCount(randomNum);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} messCount={messCount} />
      <Navbar />
      <Functionality
        setPlayStatus={setPlayStatus}
        mess={mess[messCount]}
        playStatus={playStatus}
        pageCount={pageCount}
        setPageCount={setPageCount}
      />
    </div>
  );
};

export default App;
