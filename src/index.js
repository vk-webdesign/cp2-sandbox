import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    rightPage: "ontheship",
    img:
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life",
    img:
      "https://i.pinimg.com/originals/b5/52/5e/b5525e857bf27459b470e27f01c02e05.jpg"
  },
  ontheship: {
    text:
      "Welcome aboard the ship! Please make your way to your room. What's the number?",
    leftLabel: "120",
    rightLabel: "270",
    leftPage: "death",
    rightPage: "life",
    img: "https://coxrare.files.wordpress.com/2019/07/rare-6.jpg"
  },
  death: {
    text:
      "The host fllows you to your room. When you open the door you see the great outdoors. Puzzled you turn to the conductor. 'Haha this room is reserved for loosers!', says the conductor. He kicks you off!",
    leftLabel: "reset",
    leftPage: "start",
    img:
      "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/35766_01"
  },
  life: {
    text: "Enjoy your stay!",
    leftLabel: "reset",
    leftPage: "start",
    img:
      "https://images.homedepot-static.com/productImages/8ac842fd-616d-4b99-b3dd-af9d3e6765ab/svn/black-on-beige-door-mats-2101014-1-64_1000.jpg"
  }
};

class App extends Component {
  constructor(props) {
    //creates an element, initialize
    super(props);

    //var pageName = "start"; // required for alert tag
    //alert(pages[pageName].text) // Calls page name text
    this.state = {
      page: "start" //the element that constructor creates is [ page; "start" ]
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        <img src={pageData.img} width="600" />
        <p class="type">{pageData.text}</p>
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
