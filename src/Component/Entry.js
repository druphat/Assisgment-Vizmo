import React from 'react';
import { Link } from 'react-router-dom';

function Entry(props) {
  return (
    <Link to={`/entry/${props.page.id}`} key={props.page.id} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div>

        <dt>
          <img className="round-img" src={props.imgURL} alt="avatar_img" />
          <span className="prps-name">{props.name}</span>
        </dt>

        <dd>
          <span>{props.desc}</span>
        </dd>

        <dd className="new">
          <img className="cricle-img" src={props.imgurl} alt="avatar_img" />
          <span className="sd">{props.names}</span>
          <span className="sd">{props.date}</span>
        </dd>

      </div>
    </Link>
  );
}

export default Entry;
