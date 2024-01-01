 import React from 'react';

const ResumeButton = () => {
  const resumeLink = 'https://drive.google.com/file/d/1uzx9eW3y_NcZWYgf6T7VaQgvx73kgx4V/view';

  const handleButtonClick = () => {
     window.open(resumeLink, '_blank');
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 w-[10rem] text-white font-bold py-2 px-4 rounded"
      onClick={handleButtonClick}
    >
      My Resume
    </button>
  );
};

export default ResumeButton;
