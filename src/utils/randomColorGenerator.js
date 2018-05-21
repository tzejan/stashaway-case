// Code derived from https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/

function hsv_to_rgb(h, s, v) {
  const h_i = Math.floor(h * 6);
  const f = h * 6 - h_i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let r, g, b;
  switch (h_i) {
    case 0:
      [r, g, b] = [v, t, p];
      break;
    case 1:
      [r, g, b] = [q, v, p];
      break;
    case 2:
      [r, g, b] = [p, v, t];
      break;
    case 3:
      [r, g, b] = [p, q, v];
      break;
    case 4:
      [r, g, b] = [t, p, v];
      break;
    default:
      [r, g, b] = [v, p, q];
      break;
  }
  return [Math.round(r * 256), Math.round(g * 256), Math.round(b * 256)];
}

function formatColor(r, g, b) {
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
function generateRandomColor() {
  const golden_ratio_conjugate = 0.618033988749895;
  let h = Math.random(); // use random start value

  h += golden_ratio_conjugate;
  h %= 1;
  return formatColor(...hsv_to_rgb(h, 0.85, 0.95));
}

export default generateRandomColor;
