import colors from '../data/colors';
import Shade from './Shade';
import ColorName from './Color_Name';

function AllShades() {
  for (let key in colors) {
    var UI = colors[key].map((color) => {
      return [
        <div className="w-full my-6 px-10 h-auto flex justify-between">
          <ColorName name={key} />
          <div className="basis-3/4 container_each_colors_shade">
            <Shade />
          </div>
        </div>,
      ];
    });
  }
  return UI;
}

export default AllShades;
