import React from "react";
import './Content1.css';
import GlitchClip from 'react-glitch-effect/core/Clip';

const Content =()=>{
  const message =["Welcome To SphinX..."];
  let i =0 ;
  let jsxArray = [];
  for(i=0; i<message.length;i++){
    jsxArray.push(
                    <div className='background1'>
                      
                      <GlitchClip onHover={true}>
                        <h1 className="typewriter">
                          {message[i]}    
                        </h1>
                      </GlitchClip>
                    </div>
     );
  }
  return jsxArray;
}

export default Content;