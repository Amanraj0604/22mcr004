import React, { useState } from 'react';
import "./train.css";
import Details from './details';

const Train = () => {
  const [showDetailsPage, setShowDetailsPage] = useState(false);

  const handleShowDetails = () => {
    setShowDetailsPage(true);
  };

  return (
    <div>
      <div className="head">
        <br />
        <h1>Welcome Here!</h1>
        <br />
      </div>
      <div className="train">
        <div className="left">
          <div className="serch">
            <input type="text" placeholder='Train No' />
          </div>
          <div className="but">
            <button>Search</button>
          </div>
          <div className="next">
            <button onClick={handleShowDetails}>Today's Train Details</button>
          </div>
        </div>
        <div className="right">
          {showDetailsPage ? (
            <Details />
          ) : (
            <div>
               <h3>Train Details</h3>
          <h4>Train Name</h4>
          <input type="text" placeholder='Train name' />
          <br />
          <h4>Train No</h4>
          <input type="text" placeholder='Train no' />
          <br />
          <h4>Departure Time</h4>
          <input type="text" placeholder='Departure Time(hh:mm:ss)' />
              <h2>Welcome Here!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Train;
