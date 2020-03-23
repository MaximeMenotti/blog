import random from "lodash/random";
import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid/v1";

const arr = [
  {
    id: uuid(),
    url: `https://loremflickr.com/600/100?lock=${random(0, 999)}`
  },
  {
    id: uuid(),
    url: `https://loremflickr.com/600/100?lock=${random(0, 999)}`
  },
  {
    id: uuid(),
    url: `https://loremflickr.com/600/100?lock=${random(0, 999)}`
  }
];

export default class TransitionExample extends Component {
  state = {
    index: 0,
    selected: arr[0]
  };

  nextImage = () =>
    this.setState(prevState => {
      const newIndex = prevState.index < arr.length - 1 ? prevState.index + 1 : 0;
      return {
        index: newIndex,
        selected: arr[newIndex]
      };
    });

  render = () => (
    <div className="app">
      <div style={{ marginBottom: 30, height: 100 }}>
        <TransitionGroup>
          <CSSTransition
            key={this.state.selected.id}
            timeout={1000}
            classNames="messageout"
          >
            <div style={{ marginTop: 20 }}>
              <img className="centered-image" src={this.state.selected.url} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          className="uk-button uk-button-primary"
          onClick={this.nextImage}
        >
          Next Image
        </button>
      </div>
    </div>
  );
}
