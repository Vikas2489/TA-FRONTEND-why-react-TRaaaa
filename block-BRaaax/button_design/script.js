let rootElement = document.getElementById('root');

function App() {
  return (
    <Button
      size="large"
      label="Button"
      type="tertiary"
      onClickHandler={() => alert('You Clicked Me!')}
    />
  );
}

ReactDOM.render(<App />, rootElement);
