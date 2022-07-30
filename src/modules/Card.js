import React, {Component} from 'react';
import '../CSS/CardCSS.css';

const Card = props => {
    return (
      <div className="card">
          <div className="separator" ></div>
            <div className="container">
              <h4>{props.name}</h4>
              <p>{props.phone}</p>
              <p><button type="button" className="button button-red" onClick={props.onDelete}>Delete</button></p>
              <input type="text" onChange={props.onChangeName} value={props.name} />
              <div>{props.children}</div>
          </div>
      </div>
    )
}


export default Card;
