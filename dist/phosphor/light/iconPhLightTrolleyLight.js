export const iconPhLightTrolleyLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M86,224a14,14,0,1,1-14-14A14,14,0,0,1,86,224Zm130-14a14,14,0,1,0,14,14A14,14,0,0,0,216,210Zm24-32H54V75.31a13.94,13.94,0,0,0-4.1-9.9L28.24,43.76a6,6,0,1,0-8.48,8.48L41.41,73.9A2,2,0,0,1,42,75.31V178H32a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12Z"/></svg>`;
}
