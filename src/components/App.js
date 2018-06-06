import React, {Component} from 'react';
import 'scss/modules.container.scss';
import Game from 'components/Game';

export default class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}
