export const iconPhLightHashLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,90H173l8.89-48.93a6,6,0,1,0-11.8-2.14L160.81,90H109l8.89-48.93a6,6,0,0,0-11.8-2.14L96.81,90H48a6,6,0,0,0,0,12H94.63l-9.46,52H32a6,6,0,0,0,0,12H83L74.1,214.93a6,6,0,0,0,4.83,7A5.64,5.64,0,0,0,80,222a6,6,0,0,0,5.89-4.93L95.19,166H147l-8.89,48.93a6,6,0,0,0,4.83,7,5.64,5.64,0,0,0,1.08.1,6,6,0,0,0,5.89-4.93L159.19,166H208a6,6,0,0,0,0-12H161.37l9.46-52H224a6,6,0,0,0,0-12Zm-74.83,64H97.37l9.46-52h51.8Z"/></svg>`;
}
