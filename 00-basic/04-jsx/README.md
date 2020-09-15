https://babeljs.io/ - Babel is a JavaScript compiler

Exampel
JSX - See in https://reactjs.org/docs/introducing-jsx.html

const Title = <div className="title">React Tutorial</div>;

=>

"use strict";

const Title = /*#__PURE__*/React.createElement("div", {
  className: "title"
}, "React Tutorial");