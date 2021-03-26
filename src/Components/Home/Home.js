import React from 'react';
import './Home.css';
import Content from './Components/Content1';
import NewContent from './Components/Content2';

function Home() {
  
  return(
    <div className='homebackground'>
      <Content />
      <NewContent />
    </div>
  );
}

export default Home;