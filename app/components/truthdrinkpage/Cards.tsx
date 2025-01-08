import React from 'react';

type CardProps = {
  currentQuestion: string;
  currentUser: string;
};

const Cards: React.FC<CardProps> = ({ currentQuestion, currentUser }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80 mx-auto text-center">
      <div className="mb-4">
        {currentUser ? (
          <p className="text-xl font-semibold text-gray-800">{currentUser}</p>
        ) : (
          <p className="text-gray-600">Click Shuffle to get a name</p>
        )}
      </div>
      <div>
        {currentQuestion ? (
          <p className="text-lg text-gray-700">{currentQuestion}</p>
        ) : (
          <p className="text-gray-600">Click Shuffle to get a question</p>
        )}
      </div>
    </div>
    
  );
};

export default Cards;
