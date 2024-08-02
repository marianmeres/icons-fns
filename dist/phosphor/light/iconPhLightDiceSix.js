export const iconPhLightDiceSix = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,34H64A30,30,0,0,0,34,64V192a30,30,0,0,0,30,30H192a30,30,0,0,0,30-30V64A30,30,0,0,0,192,34Zm18,158a18,18,0,0,1-18,18H64a18,18,0,0,1-18-18V64A18,18,0,0,1,64,46H192a18,18,0,0,1,18,18ZM102,84A10,10,0,1,1,92,74,10,10,0,0,1,102,84Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,84Zm-72,44a10,10,0,1,1-10-10A10,10,0,0,1,102,128Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,128Zm-72,44a10,10,0,1,1-10-10A10,10,0,0,1,102,172Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,172Z"/></svg>`;
}
