import React from 'react';
import { useParams } from 'react-router-dom';
import pages from './pages';
import './Enrtys.css';

const EntryDetail = () => {
  const { id } = useParams();
  const entry = pages.find(p => p.id.toString() === id);

  return (
    <div >
      {entry ? (
        <div >
          <h1>{entry.name}</h1>
          <img  className = "enrtyimg"src={entry.imgURL} alt={entry.name} />
          <h3>Paragraph on Technology </h3>
<p className="par">Scientific innovations or technology is the most amazing thing that has ever happened to humankind. In this modern world, technology is no more a luxury; it has become a necessity. Life without technology is next to impossible since humans have become dependent on technological advancements. For every human activity, we need a machine, and then there comes technology. It has made all our lives easier and more convenient and has also made transportation, education, labour, etc., more accessible. Technological breakthroughs change from time to time in today’s fast-paced, ever-changing world. However, in today’s world, technology plays a critical role in strengthening a country’s economy and people’s lives.
          We are all surrounded by technology from all corners. From waking up in the morning till we sleep, in some way or the other, we need technology. Technology, our new present and future, is making human lives easier and more convenient. With new technological innovations, human beings have become more dependent on science and technology. We rely on technology for all our activities, and have become an integral part of our lives. The entire civilization has become reliant on the modern technology it employs. Life and business would come to a halt without technology. It is beneficial to society, but it must be handled cautiously. It is helpful, and at the same time, it is harmful. It has reduced man’s labour and improved the productivity of the work, but it has also reduced employment at the same time. So, technology should be used only to a certain extent by not depending on it completely.</p>
        </div>
      ) : (
        <p>Entry not found</p>

      )}
    </div>
  );
}

export default EntryDetail;
