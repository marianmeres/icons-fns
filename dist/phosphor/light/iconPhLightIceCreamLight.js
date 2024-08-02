export const iconPhLightIceCreamLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M206,98.83V96A78,78,0,0,0,50,96v2.83A22,22,0,0,0,56,142h4.45L115.84,239a14,14,0,0,0,24.32,0L195.55,142H200a22,22,0,0,0,6-43.17ZM129.74,233a2,2,0,0,1-3.48,0l-52-91h24L140,215.06ZM136,142l22.89,40.06-12,20.91-34.84-61Zm29.8,28-16-28h32ZM200,130H56a10,10,0,0,1,0-20,6,6,0,0,0,6-6V96a66,66,0,0,1,132,0v8a6,6,0,0,0,6,6,10,10,0,0,1,0,20Z"/></svg>`;
}
