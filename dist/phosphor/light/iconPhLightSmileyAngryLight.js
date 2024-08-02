export const iconPhLightSmileyAngryLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,150a10,10,0,1,1,10-10A10,10,0,0,1,92,150Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm66-2A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM172.67,83,128,112.79,83.33,83a6,6,0,0,0-6.66,10l48,32a6,6,0,0,0,6.66,0l48-32a6,6,0,1,0-6.66-10Zm-17.35,96c-8.13-5.4-15.88-9-27.32-9s-19.19,3.6-27.32,9a6,6,0,0,0,6.64,10c6.67-4.43,12.19-7,20.68-7s14,2.57,20.68,7a5.94,5.94,0,0,0,3.31,1,6,6,0,0,0,3.33-11Z"/></svg>`;
}
