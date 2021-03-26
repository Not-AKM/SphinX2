import React from "react";
import './Content2.css';
import TextLoop from "react-text-loop";


const NewContent =()=>{
    return(
        <div className='background2'>
            <TextLoop interval='1000'>
                <span style={{color:'darkgrey'}}>SETUP</span>
                <span style={{color:'grey'}}>PLAY</span>
                <span style={{color:'darkgrey'}}>CONQUER</span>
                <span style={{color:'grey'}}>WIN</span>
            </TextLoop>
        </div>
     );
  }

export default NewContent;