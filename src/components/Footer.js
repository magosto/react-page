import React from 'react';
import './components-style.css';

export class Footer extends React.Component {
	render() {
		return(
		<div className="App-footer">
          <h2 className="footer-header">Contact Us</h2>
          <button className="submit">Submit</button>
        </div>
		);
	}
}
