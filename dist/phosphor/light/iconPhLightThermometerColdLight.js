export const iconPhLightThermometerColdLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248.29,75.82l-22.58,7.33,13.95,19.21a6,6,0,1,1-9.7,7.06L216,90.21l-14,19.21a6,6,0,1,1-9.7-7.06l13.95-19.21-22.58-7.33a6,6,0,1,1,3.71-11.41L210,71.74V48a6,6,0,0,1,12,0V71.74l22.58-7.33a6,6,0,0,1,3.71,11.41ZM150,184a30,30,0,1,1-36-29.4V120a6,6,0,0,1,12,0v34.6A30.05,30.05,0,0,1,150,184Zm-12,0a18,18,0,1,0-18,18A18,18,0,0,0,138,184Zm44,0A62,62,0,1,1,82,135V48a38,38,0,0,1,76,0v87A62.06,62.06,0,0,1,182,184Zm-12,0a50.07,50.07,0,0,0-21.43-41A6,6,0,0,1,146,138V48a26,26,0,0,0-52,0v90A6,6,0,0,1,91.43,143,50,50,0,1,0,170,184Z"/></svg>`;
}
