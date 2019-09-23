import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { nextTick } from "q";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    btnAmount: 2,
    oneLabel: "Train",
    twoLabel: "Ship",
    onePage: "onthetrain",
    twoPage: "ontheship",
    img:
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    btnAmount: 3,
    oneLabel: "12E",
    twoLabel: "68A",
    threeLabel: "97C",
    onePage: "death",
    twoPage: "interest",
    threePage: "life",
    img:
      "https://i.pinimg.com/originals/b5/52/5e/b5525e857bf27459b470e27f01c02e05.jpg"
  },
  ontheship: {
    text:
      "Welcome aboard the ship! Please make your way to your room. What's the number?",
    btnAmount: 3,
    oneLabel: "120",
    twoLabel: "222",
    threeLabel: "270",
    onePage: "death",
    twoPage: "interest",
    threePage: "life",
    img: "https://coxrare.files.wordpress.com/2019/07/rare-6.jpg"
  },
  death: {
    text:
      "The host follows you to your room. When you open the door you see the great outdoors. “Haha this room is reserved for loosers!”, he says.",
    btnAmount: 4,
    oneLabel: "punch host",
    onePage: "punch",
    twoLabel: "kick host",
    twoPage: "kick",
    threeLabel: "push host",
    threePage: "push",
    fourLabel: "run!",
    img:
      "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/35766_01"
  },
  punch: {
    text:
      "You punch the host. He ducks and pushes you out into the middle of nowhere",
    btnAmount: 1,
    oneLabel: "reset",
    onePage: "start",
    img: "https://www.safetysign.com/images/source/large-images/G2037.png"
  },
  kick: {
    text:
      "You kick the host. He jumps and pushes you out into the middle of nowhere",
    btnAmount: 1,
    oneLabel: "reset",
    onePage: "start",
    img: "https://www.safetysign.com/images/source/large-images/G2037.png"
  },
  push: {
    text:
      "You push the host. He falls back, you then grab his arm and hurl him into the middle of nowhere",
    btnAmount: 1,
    oneLabel: "Next",
    onePage: "life",
    img: "https://www.safetysign.com/images/source/large-images/G2037.png"
  },
  interest: {
    text:
      "You arrive at your room and see the most interesting man in the world sitting on your bed. He says, “Welcome to paradice, grab a drink?”",
    btnAmount: 3,
    oneLabel: "Thanks!",
    twoLabel: "Ask",
    threeLabel: "Confront",
    onePage: "thanks",
    twoPage: "ask",
    threePage: "confront",
    img:
      "https://snagfilms-a.akamaihd.net/6fef71e8-3185-432f-8431-106c2be042c8/images/d6/2e/8769c768417b93eea298366cfa3e/1524595865897_4.24pmweb_16x9Images.jpg"
  },
  thanks: {
    text:
      "After a moment of shock you compose yourself and reach out for a Dos Equis.",
    btnAmount: 1,
    oneLabel: "Drink",
    onePage: "drink",
    img:
      "https://products1.imgix.drizly.com/ci-dos-equis-lager-47ccc594ec8ef07a.jpeg?auto=format%2Ccompress&fm=jpeg&q=20"
  },
  drink: {
    text: "You drink the most beautiful beer ever to reach your lipps.",
    btnAmount: 1,
    oneLabel: "Lick your lipps",
    onePage: "life",
    img:
      "https://products1.imgix.drizly.com/ci-dos-equis-lager-47ccc594ec8ef07a.jpeg?auto=format%2Ccompress&fm=jpeg&q=20"
  },
  ask: {
    text:
      "After a moment of shock you ask the interesting man, “Why are you in my room?”",
    btnAmount: 1,
    oneLabel: "Next",
    onePage: "why",
    img:
      "http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png"
  },
  why: {
    text:
      "The interesting man takes a puff from his cigar, “Why simply to offer you a drink, is this a problem?”.",
    btnAmount: 2,
    oneLabel: "No",
    onePage: "drink",
    twoLabel: "Yes!",
    twoPage: "confront",
    img:
      "https://moneydotcomvip.files.wordpress.com/2016/07/160709_em_mostinterestingman.jpg"
  },
  confront: {
    text: "Get the f%$k out of my room old man!",
    btnAmount: 1,
    oneLabel: "Next",
    onePage: "out",
    img:
      "https://spectator.imgix.net/content/uploads/2018/10/iStock-841735776.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550"
  },
  out: {
    text:
      "He looks at you. You see a hint of sadness in his eyes. He get's up and says, “If you can't have a drink with a stranger, you will have a very boring life.” after a moments pause he turns and says, “Good Day.” as he walks out.",
    btnAmount: 1,
    oneLabel: "Next",
    onePage: "life",
    img:
      "https://tungstenhomeloans.com.au/wp-content/uploads/2019/03/disappointment-e1389752442682.jpg"
  },
  life: {
    text: "Enjoy your stay!",
    btnAmount: 1,
    oneLabel: "reset",
    onePage: "start",
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
    var buttonOne = "";
    var buttonTwo = "";
    var buttonThree = "";
    var buttonFour = "";
    var buttonFive = "";

    //    if (pageData.btn) {
    //      button = <button class="btn" onClick={() => this.goToPage(pageData.btn.btn1.leftPage)}>{pageData.btn.btn1.leftLabel}</button>;
    //    };

    if (pageData.btnAmount == 1) {
      buttonOne = (
        <button class="btn" onClick={() => this.goToPage(pageData.onePage)}>
          {pageData.oneLabel}
        </button>
      );
    } else if (pageData.btnAmount == 2) {
      (buttonOne = (
        <button class="btn" onClick={() => this.goToPage(pageData.onePage)}>
          {pageData.oneLabel}
        </button>
      )),
        (buttonTwo = (
          <button class="btn" onClick={() => this.goToPage(pageData.twoPage)}>
            {pageData.twoLabel}
          </button>
        ));
    } else if (pageData.btnAmount == 3) {
      (buttonOne = (
        <button class="btn" onClick={() => this.goToPage(pageData.onePage)}>
          {pageData.oneLabel}
        </button>
      )),
        (buttonTwo = (
          <button class="btn" onClick={() => this.goToPage(pageData.twoPage)}>
            {pageData.twoLabel}
          </button>
        )),
        (buttonThree = (
          <button class="btn" onClick={() => this.goToPage(pageData.threePage)}>
            {pageData.threeLabel}
          </button>
        ));
    } else if (pageData.btnAmount == 4) {
      (buttonOne = (
        <button class="btn" onClick={() => this.goToPage(pageData.onePage)}>
          {pageData.oneLabel}
        </button>
      )),
        (buttonTwo = (
          <button class="btn" onClick={() => this.goToPage(pageData.twoPage)}>
            {pageData.twoLabel}
          </button>
        )),
        (buttonThree = (
          <button class="btn" onClick={() => this.goToPage(pageData.threePage)}>
            {pageData.threeLabel}
          </button>
        )),
        (buttonFour = (
          <button class="btn" onClick={() => this.goToPage(pageData.fourPage)}>
            {pageData.fourLabel}
          </button>
        ));
    } else if (pageData.btnAmount == 5) {
      (buttonOne = (
        <button class="btn" onClick={() => this.goToPage(pageData.onePage)}>
          {pageData.oneLabel}
        </button>
      )),
        (buttonTwo = (
          <button class="btn" onClick={() => this.goToPage(pageData.twoPage)}>
            {pageData.twoLabel}
          </button>
        )),
        (buttonThree = (
          <button class="btn" onClick={() => this.goToPage(pageData.threePage)}>
            {pageData.threeLabel}
          </button>
        )),
        (buttonFour = (
          <button class="btn" onClick={() => this.goToPage(pageData.fourPage)}>
            {pageData.fourLabel}
          </button>
        )),
        (buttonFive = (
          <button class="btn" onClick={() => this.goToPage(pageData.fivePage)}>
            {pageData.fiveLabel}
          </button>
        ));
    }

    return (
      <div class="container">
        <div className="App">
          <img class="img" src={pageData.img} height="400" />
          <p class="type">{pageData.text}</p>
          <div>
            {buttonOne}
            {buttonTwo}
            {buttonThree}
            {buttonFour}
            {buttonFive}
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
