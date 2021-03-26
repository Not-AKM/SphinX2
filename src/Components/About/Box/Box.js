import React from 'react';
import "./Box.css";
import GlitchClip from 'react-glitch-effect/core/Clip';

function Box() {
    return(
        <div>
            <GlitchClip onHover={true}>
                <h2 className="box">Introducing the Unrivalled Platform for your Gaming Entity</h2>
                <p>Last Updated : 25 March, 2021</p>
            </GlitchClip>
        </div>
    );
}

export default Box;