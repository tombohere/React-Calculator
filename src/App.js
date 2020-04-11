import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

const Calculator = () => {
  return (
    <div className="calc-main">
      <div className="calc-top">
        <div className="calc-value">0</div>
      </div>
      <div className="calc-bottom">
        <div className="calc-left">
          <div className="calc-clear">clear</div>
          <div className="calc-numbers">
            <div className="calc-number">7</div>
            <div className="calc-number">8</div>
            <div className="calc-number">9</div>
            <div className="calc-number">4</div>
            <div className="calc-number">5</div>
            <div className="calc-number">6</div>
            <div className="calc-number">1</div>
            <div className="calc-number">2</div>
            <div className="calc-number">3</div>
            <div className="calc-number"></div>
            <div className="calc-number">0</div>
            <div className="calc-number">.</div>
          </div>
        </div>
        <div className="calc-right">
          <div className="calc-operator">&#247;</div>
          <div className="calc-operator">&#215;</div>
          <div className="calc-operator">&#43;</div>
          <div className="calc-operator">&#8315;</div>
          <div className="calc-operator">&#61;</div>
        </div>
      </div>
    </div>
  );
};
