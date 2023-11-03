// import React from 'react';
import './DataSet.css';

function DataSet() {
  const cardData = [
    {
      title: 'Helmet Violation',
      driveLink: 'https://drive.google.com/drive/folders/1s-7t2mbCu1bh413IPuZ8QfC-mu2dnuGh?usp=sharing',
      img: '../src/assets/helmet1.png',
    },
    {
      title: 'Triple Riding Violation',
      driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_2',
      img: '../src/assets/tripling.png',
    },
    {
      title: 'Mobile Phone Usage Violation',
      driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_3',
      img: '../src/assets/mobile.png',
    },
    {
      title: 'Seat Belt Violation',
      driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_4',
      img: '../src/assets/seatbelt.jpg',
    },
    {
      title: 'Passenger without Helmet Violation',
      driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_5',
      img: '../src/assets/passenger.png',
    },
    {
      title: 'No-License Violation',
      driveLink: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_6',
      img: '../src/assets/way.png',
    },
  ];

  const handleDownload = (driveLink, title) => {
    const a = document.createElement('a');
    a.href = driveLink;
    a.download = `${title}.zip`;
    a.click();
  };
  return (
    <>
      <h1>Data Set Download Page</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <img src={card.img} alt="Image" />
            <br />
            <button onClick={() => handleDownload(card.driveLink, card.title)}>Download</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default DataSet;
