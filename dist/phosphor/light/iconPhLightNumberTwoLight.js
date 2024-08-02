export const iconPhLightNumberTwoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,208a6,6,0,0,1-6,6H88a6,6,0,0,1-4.8-9.6l72-95.92a34,34,0,0,0-31.88-54.14A34.1,34.1,0,0,0,96.83,74.41a6,6,0,0,1-11-4.81,46.47,46.47,0,0,1,5.43-9.28,46,46,0,0,1,73.48,55.37L100,202h68A6,6,0,0,1,174,208Z"/></svg>`;
}
