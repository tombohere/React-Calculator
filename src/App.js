import React, { useState, useEffect } from 'react';
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
    value: '0'
  });

  useEffect(() => {
    function handleResize() {
      // fit game to fill viewport
      var [t1] = document.getElementsByClassName('calc-container');
      if (3 * window.innerWidth > 2 * window.innerHeight) {
        t1.style.height = '96vh';
        t1.style.width = '63vh';
        t1.style.fontSize = '7.3vh';
      } else {
        t1.style.height = '144vw';
        t1.style.width = '96vw';
        t1.style.fontSize = '10.95vw';
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  const clearEnter = () => {
    setCalc({ value: '0' });
  };

  const numberEnter = n => {
    if (calc.value === '0') {
      setCalc({ value: n + '' });
    } else {
      setCalc({ value: calc.value + n + '' });
    }
  };

  const decimalEnter = () => {
    let t = calc.value.match(/[\d\.]*$/);
    if (!t[0].includes('.')) {
      setCalc({ value: calc.value + '.' });
    }
  };

  const divideEnter = () => {
    if (calc.value[calc.value.length - 1] !== '/') {
      setCalc({ value: calc.value + '/' });
    }
  };

  const multiplyEnter = () => {
    if (calc.value[calc.value.length - 1] !== '*') {
      setCalc({ value: calc.value + '*' });
    }
  };

  const addEnter = () => {
    if (calc.value[calc.value.length - 1] !== '+') {
      setCalc({ value: calc.value + '+' });
    }
  };

  const subtractEnter = () => {
    if (calc.value[calc.value.length - 1] !== '-') {
      setCalc({ value: calc.value + '-' });
    }
  };

  const equalsEnter = () => {
    setCalc({ value: eval(calc.value) + '' });
  };

  return (
    <div className="calc-container">
      <div className="calc-main">
        <div className="calc-top">
          <div className="calc-value">{calc.value}</div>
        </div>
        <div className="calc-bottom">
          <div className="calc-left">
            <div className="calc-clear" onClick={clearEnter}>
              C
            </div>
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
              <div className="calc-number" onClick={decimalEnter}>
                .
              </div>
            </div>
          </div>
          <div className="calc-right">
            <div className="calc-operator" onClick={divideEnter}>
              &#247;
            </div>
            <div className="calc-operator" onClick={multiplyEnter}>
              &#215;
            </div>
            <div className="calc-operator" onClick={addEnter}>
              &#43;
            </div>
            <div className="calc-operator" onClick={subtractEnter}>
              &#8315;
            </div>
            <div className="calc-operator" onClick={equalsEnter}>
              &#61;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
