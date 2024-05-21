import React from 'react';

function Entry(props) {
  return (
  
      <div className = "term ">
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
  );
}

export default Entry;
