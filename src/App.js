import React, { Component, Fragment } from "react";
import "./index.css";

let lastScrollY = 0;
let ticking = false;

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Create a ref object
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  fix = React.createRef();
  cts = React.createRef();

  handleScroll = () => {
    const ctsHeight = document.getElementById("cts").offsetHeight; //상단 div 의 높이
    console.log("ctsHeight:", ctsHeight);

    lastScrollY = window.scrollY; //현재 scroll의 위치값
    console.log("lastScrollY:", lastScrollY);

    if (lastScrollY > ctsHeight) {
      this.fix.current.style.top = `${lastScrollY - ctsHeight}px`;
      console.log("this.fix.current.style.top:", this.fix.current.style.top);
    }

    console.log("cts:", document.getElementsByClassName(".cts"));
    console.log("ticking:", ticking);
  };

  render() {
    return (
      <Fragment>
        <div
          style={{ height: "3600px", background: "red" }}
          id="cts"
          ref={this.cts}
        />
        <div className="container">
          <div className="outer">
            <div className="left">
              <div className="lnb">LEFT</div>
            </div>
            <div className="right">
              <div className="cts" />
              <div className="fixed" ref={this.fix} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
