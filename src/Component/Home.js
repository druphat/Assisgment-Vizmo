import React from 'react';
import pages from './pages';
import Entry from './Entry';
import { Link } from 'react-router-dom';
import './styles.css';

function createEntry(page) {
  return (
    <div className="term" key={page.id}>
      <Link to={`/entry/${page.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Entry
          imgURL={page.imgURL}
          name={page.name}
          desc={page.desc}
          imgurl={page.imgurl}
          names={page.names}
          date={page.date}
        />
      </Link>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>
        <span>My Blogs</span>
      </h1>
      <div className="dict">{pages.map(createEntry)}</div>
    </div>
  );
}

export default Home;
