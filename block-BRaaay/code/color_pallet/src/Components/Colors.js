import colors from '../data/colors';
import Color from './Color';

function Colors() {
  let keys = Object.keys(colors);
  return keys.map((key) => {
    return <Color key={key} name={key} allColors={colors[key]} />;
  });
}

export default Colors;
