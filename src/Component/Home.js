 // eslint-disable-next-line
import React from 'react';
import pages from './pages';
import Entry from './Entry';
import { Link } from 'react-router-dom';
import './styles.css';

function createEntry(page) {
  return (
    <div class="term">
      <Link to={`/entry/${page.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Entry
          imgURL={page.imgURL}
          name={page.name}
          desc={page.desc}
          imgurl={page.imgurl} // Check for duplicate props, 'imgURL' and 'imgurl' might be the same...
          names={page.names}
          date={page.date}
        />
      </Link>
    </div>
  );
}

function Home() {
  {document.body.style = 'background: black;'}
  return (
      <div className="parent">
      
      <h1>
        <span className='heading'>My Blogs</span>
      </h1>
      <div className="dict" >{pages.map(createEntry)}</div>
    </div>
  );
}

export default Home;
