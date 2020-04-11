import React, { useState } from 'react';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

const Calculator = () => {
  const [calc, setCalc] = useState({
    value: 0
  });

  const numberEnter = n => {
    if (calc.value === 0) {
      setCalc({ value: n });
    } else {
      setCalc({ value: calc.value + '' + n });
    }
  };

  return (
    <div className="calc-main">
      <div className="calc-top">
        <div className="calc-value">{calc.value}</div>
      </div>
      <div className="calc-bottom">
        <div className="calc-left">
          <div className="calc-clear">clear</div>
          <div className="calc-numbers">
            <div className="calc-number" onClick={() => numberEnter(7)}>
              7
            </div>
            <div className="calc-number" onClick={() => numberEnter(8)}>
              8
            </div>
            <div className="calc-number" onClick={() => numberEnter(9)}>
              9
            </div>
            <div className="calc-number" onClick={() => numberEnter(4)}>
              4
            </div>
            <div className="calc-number" onClick={() => numberEnter(5)}>
              5
            </div>
            <div className="calc-number" onClick={() => numberEnter(6)}>
              6
            </div>
            <div className="calc-number" onClick={() => numberEnter(1)}>
              1
            </div>
            <div className="calc-number" onClick={() => numberEnter(2)}>
              2
            </div>
            <div className="calc-number" onClick={() => numberEnter(3)}>
              3
            </div>
            <div className="calc-number" />
            <div className="calc-number" onClick={() => numberEnter(0)}>
              0
            </div>
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
