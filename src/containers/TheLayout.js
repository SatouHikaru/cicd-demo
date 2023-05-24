import React from 'react'
import TheContent from './TheContent'
import TheHeader from './TheHeader'

const TheLayout = () => {
  return (
    <div id="wrapper">
      <TheHeader />
      <TheContent />
    </div>
  );
};

export default TheLayout;
