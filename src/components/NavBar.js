import React from 'react';

export class NavBar extends React.Component {
	render(){
		const pages = ['home ', 'test', 'bio ', 'about ', 'contact '];
    	const navLinks = pages.map(page => {
      	return (
        <a className="NavBar" href={'/' + page}>
          {page}
        </a>
      )
    });
 	return <nav>{navLinks}</nav>;
	}
}
