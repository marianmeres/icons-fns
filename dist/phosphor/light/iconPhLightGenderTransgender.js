export const iconPhLightGenderTransgender = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,34H168a6,6,0,0,0,0,12h33.52L168,79.52,148.24,59.76a6,6,0,1,0-8.48,8.49L159.52,88l-18.46,18.46a69.94,69.94,0,1,0,8.49,8.48L168,96.5l19.76,19.76a6,6,0,0,0,8.48-8.49L176.48,88,210,54.49V88a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34ZM137,201a58,58,0,1,1,17-41A58,58,0,0,1,137,201Z"/></svg>`;
}
