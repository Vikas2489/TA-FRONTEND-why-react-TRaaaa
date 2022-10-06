function Color(props) {
  return (
    <div className="w-full my-10 px-10 h-auto flex justify-around">
      <header className="mr-14">
        <h2 className="w-13 align-self-end">
          {props.name.toUpperCase()}
          <span className="block text-gray"> {'colors' + props.name}</span>
        </h2>
      </header>
      <ul className="basis-3/4 flex flex-wrap container_each_colors_shade">
        {props.allColors.map((color, index) => {
          return (
            <li key={color} className="mr-8 mb-7 inline-block">
              <div
                className="shade rounded w-36 h-20 bg-sky-500/100"
                style={{ backgroundColor: color }}
              ></div>
              <div className="flex justify-between items-center">
                <h3>{index === 0 ? 50 : 100 * index}</h3>
                <span>{color}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Color;
