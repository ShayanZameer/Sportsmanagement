

import React from 'react';
import Card from './Card';  


const Mainsection = () => {
  return (
    
    
    <div className="p-4">
      <div className=" grid grid-cols-1 xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Mainsection;

