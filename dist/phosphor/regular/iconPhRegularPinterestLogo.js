export const iconPhRegularPinterestLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z"/></svg>`;
}
