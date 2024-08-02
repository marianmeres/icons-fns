export const iconPhLightScribbleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.25,188.24a16.63,16.63,0,0,0,0,23.52,6,6,0,1,1-8.48,8.48,28.61,28.61,0,0,1,0-40.48l9.37-9.38a16.63,16.63,0,0,0-23.52-23.51l-66.75,66.75a28.63,28.63,0,0,1-40.49-40.49l98.76-98.75a16.63,16.63,0,0,0-23.52-23.51L82.86,117.62A28.63,28.63,0,0,1,42.37,77.13L83.75,35.76a6,6,0,1,1,8.49,8.48L50.86,85.62a16.63,16.63,0,0,0,23.52,23.51l66.75-66.75a28.63,28.63,0,0,1,40.49,40.49L82.86,181.62a16.63,16.63,0,0,0,23.52,23.51l66.76-66.75a28.63,28.63,0,0,1,40.49,40.49Z"/></svg>`;
}
