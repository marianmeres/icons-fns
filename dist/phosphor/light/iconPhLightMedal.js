export const iconPhLightMedal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M214,96A86,86,0,1,0,74,162.87V240a6,6,0,0,0,2.85,5.1A5.93,5.93,0,0,0,80,246a6,6,0,0,0,2.68-.63L128,222.71l45.33,22.66A6,6,0,0,0,182,240V162.87A85.87,85.87,0,0,0,214,96ZM54,96a74,74,0,1,1,74,74A74.09,74.09,0,0,1,54,96ZM170,230.29l-39.33-19.66a6,6,0,0,0-5.36,0L86,230.29V171a85.75,85.75,0,0,0,84,0ZM128,150A54,54,0,1,0,74,96,54.06,54.06,0,0,0,128,150Zm0-96A42,42,0,1,1,86,96,42,42,0,0,1,128,54Z"/></svg>`;
}
