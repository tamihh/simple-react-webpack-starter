'use strict';

import React from 'react';


const App = React.createClass({
    render: function() {

        var dog = {
          sound: 'woof',
          talk: function() {
            console.log(this.sound);
          }
        }

        dog.talk();

        var talkFunction = dog.talk;

        var boundFunction = talkFunction.bind(dog);

        return (
          <h1>Aplicação 1</h1>
        );
    }
});

export default App;
