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
    value: '0',
    display: '0'
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
      // fullscreen
      // t1.style.height = '100vh';
      // t1.style.width = '100vw';
      // t1.style.fontSize = '7.63vh';
      // myRef.current.focus();
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  const clearEnter = () => {
    setCalc({ value: '0', display: '0' });
  };

  const numberEnter = n => {
    if (calc.value === '0') {
      setCalc({ value: n + '', display: n + '' });
    } else {
      let t = calc.value + n + '';
      setCalc({ value: t, display: getDisplay(t) });
    }
  };

  const decimalEnter = () => {
    let t = calc.value.match(/[\d\.]*$/);
    if (!t[0].includes('.')) {
      let t2 = calc.value + '.';
      setCalc({ value: t2, display: t2 });
    }
  };

  const operatorEnter = n => {
    if (!calc.value.match(/[\/\*\+-]$/)) {
      let t = calc.value + n;
      setCalc({ value: t, display: getDisplay(t) });
    }
  };

  const equalsEnter = () => {
    if (!calc.value.match(/[\/\*\+-]$/)) {
      let value = eval(calc.value).toFixed(8) - 0 + '';
      setCalc({ value: value, display: getDisplay(value) });
    }
  };

  const getDisplay = str => {
    str = str.replace('/', '÷').replace('*', '×');
    return str;
  };

  const handleKeyPress = event => {
    if (event.key === 'c') return clearEnter();
    if ('0123456789'.includes(event.key)) return numberEnter(event.key);
    if (event.key === '.') return decimalEnter();
    if ('/*+-'.includes(event.key)) return operatorEnter(event.key);
    if (event.key === 'Enter') return equalsEnter();
  };

  const handleNumber = e => {
    let n = e.target.innerText;
    if (n === 'C') return clearEnter();
    if (n === '.') return decimalEnter();
    if (n) return numberEnter(n);
  };

  const handleOperator = e => {
    let n = e.target.getAttribute('op');
    if ('/*+-'.includes(n)) {
      return operatorEnter(n);
    }
    if (n === '=') return equalsEnter();
  };

  return (
    <div className="calc-container" tabIndex="0" onKeyPress={handleKeyPress}>
      <div className="calc-main">
        <div className="calc-top">
          <div className="calc-value">{calc.display}</div>
        </div>
        <div className="calc-bottom">
          <div className="calc-left" onClick={handleNumber}>
            <div className="calc-clear">C</div>
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
              <div/>
              <div className="calc-number">0</div>
              <div className="calc-number">.</div>
            </div>
          </div>
          <div className="calc-right" onClick={handleOperator}>
            <div className="calc-operator" op="/">
              ÷
            </div>
            <div className="calc-operator" op="*">
              ×
            </div>
            <div className="calc-operator" op="+">
              +
            </div>
            <div className="calc-operator" op="-">
              -
            </div>
            <div className="calc-operator" op="=">
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
