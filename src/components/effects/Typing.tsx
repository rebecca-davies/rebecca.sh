import React from "react";
import Typed from 'typed.js'

class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: ['Web designer', 'Web developer', 'Frontend developer', 'Backend developer'],
      backDelay: 2000,
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <span
          className="whitespace-pre"
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default Typing;