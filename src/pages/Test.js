import React from 'react';
import {Header} from '../components/Header';
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';

export class Test extends React.Component {
	render(){
    return (
      <div className="App">
        <Header />
        <NavBar />
        <div className="App-body">
          <p>
            Nunc sollicitudin porttitor felis nec tincidunt. Quisque vel condimentum nisl, et commodo magna. Vivamus tortor urna, viverra a nulla suscipit,
             dapibus suscipit sapien. Duis sit amet gravida lacus. Sed lobortis arcu id accumsan auctor. Praesent tempor leo lobortis mauris vehicula placerat.
              Ut nulla nunc, malesuada in porta ut, commodo nec sem. Curabitur vitae est tempor, semper nisl eu, malesuada massa. Duis placerat odio quis nisi
              sodales vulputate. Quisque id sodales lectus, non luctus purus. Fusce varius mi ultricies, ultrices dui quis, dapibus neque.
          </p>

        </div>
        <Footer />
      </div>


    );

  }
}
