import './Home.css';
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";




function Home(){
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/userviewform', {replace: true}), [navigate]);

    return(
      <div className="main">
      <div className="info">
        <div className="head">
          <h1>
            <span>Cyber</span>Form
          </h1>
        </div>
        <form id="f1" name="f1" className="search">
          <input
            type="text"
            name="t1"
            placeholder="Paste your form URL to get started"
            required=""
          />
          <input type="submit" onClick={handleOnClick}/>
        </form>
      </div>
    </div>  )
  }

  export default Home;