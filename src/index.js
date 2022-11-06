import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
class Shape{
  constructor(x,y) {
  this.xPosition = x;
  this.yPosition - y;
  }
  getArea() {...}
}
  class Circle extend Shape {
    constructor(x, y, radius) {
      super(x, y , radius);
      this.radius = radius
    }
      getArea() {...}
   }
    let circle = new Circle(1,2,3):
ReactDOM.render(<App />, document.getElementById("root"));
