import React from 'react';
import ReactDOM from 'react-dom/client';

let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

// - Map over the data and create button for each
// - Each button should have different text based on the value
// - When user clicks on the button display the name of fruit in `alert`
// - Don't forget to use `key` when you are using `map` on array

let rootElement = document.getElementById('root');

function sayHello(e) {
  if (e.target.innerText.split(' ').length >= 2) {
    return alert(e.target.innerText);
  } else {
    return alert(`Hello ${e.target.innerText}`);
  }
}

function App() {
  return (
    <>
      {fruits.map((fruit) => {
        return (
          <button key={fruit.id} onClick={sayHello}>
            {fruit.value}
          </button>
        );
      })}
      <button onClick={() => alert('Hello React Event')}>Click</button>
      <button
        onClick={() => {
          alert('To learn React use https://reactjs.org');
          alert('React and ReactDOM works together');
          alert('Babel helps in writing JSX');
        }}
      >
        How can i help you?
      </button>
      <button onClick={sayHello}>Arya</button>
      <button onClick={sayHello}>John</button>
      <button onClick={sayHello}>Bran</button>
    </>
  );
}

ReactDOM.createRoot(rootElement).render(<App />);
