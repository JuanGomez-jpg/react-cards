import React, {Component} from 'react';
import '../CSS/CardCSS.css';

class Card extends Component {
  render ()
  {
    return (
      <div className="card">
        <img src={this.props.avatar} className="image" alt="Avatar" />
          <div className="separator" ></div>
            <div className="container">
              <h4>{this.props.name}</h4>
              <p>{this.props.tittle}</p>
              <p><button type="button" className="button button-red" onClick={this.props.onDelete}>Delete</button></p>
              <input type="text" onChange={this.props.onChangeName} value={this.props.name} />
              <div>{this.props.children}</div>
          </div>
      </div>
    )
  }
}


export default Card;
