function ColorName(name = '') {
  return (
    <header>
      <h2 className="w-13 align-self-end">
        {name}
        <span className="block text-gray">colors {name}</span>
      </h2>
    </header>
  );
}

export default ColorName;
