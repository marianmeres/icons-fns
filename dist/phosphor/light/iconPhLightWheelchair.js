export const iconPhLightWheelchair = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M253.69,190.1a6,6,0,0,0-7.59-3.79L227,192.66l-29.68-59.34A6,6,0,0,0,192,130H110V102.05c.66,0,1.33,0,2,0h56a6,6,0,0,0,0-12H112c-.67,0-1.33,0-2,0V77.4a30,30,0,1,0-12,0v14A70,70,0,0,0,112,230c32.62,0,62-22.08,69.81-52.5a6,6,0,0,0-11.62-3c-6.49,25.21-31,43.5-58.19,43.5A58,58,0,0,1,98,103.72V136a6,6,0,0,0,6,6h84.29l30.34,60.68a6,6,0,0,0,7.27,3l24-8A6,6,0,0,0,253.69,190.1ZM86,48a18,18,0,1,1,18,18A18,18,0,0,1,86,48Z"/></svg>`;
}
