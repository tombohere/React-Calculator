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
    str = str.replace('/', '÷');
    str = str.replace('*', '×');
    return str;
  };

  const handleKeyPress = event => {
    if (event.key === 'c') clearEnter();
    if ('0123456789'.includes(event.key)) numberEnter(event.key);
    if (event.key === '.') decimalEnter();
    if (event.key === '/') divideEnter();
    if (event.key === '*') multiplyEnter();
    if (event.key === '+') addEnter();
    if (event.key === '-') subtractEnter();
    if (event.key === 'Enter') equalsEnter();
  };

  return (
    <div className="calc-container" tabIndex="0" onKeyPress={handleKeyPress}>
      <div className="calc-main">
        <div className="calc-top">
          <div className="calc-value">{calc.display}</div>
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
            <div className="calc-operator" onClick={() => operatorEnter('/')}>
              ÷
            </div>
            <div className="calc-operator" onClick={() => operatorEnter('*')}>
              ×
            </div>
            <div className="calc-operator" onClick={() => operatorEnter('+')}>
              +
            </div>
            <div className="calc-operator" onClick={() => operatorEnter('-')}>
              ⁻
            </div>
            <div className="calc-operator" onClick={equalsEnter}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
