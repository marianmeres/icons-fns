export const iconPhLightBookOpenUser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,74H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,74H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V80A6,6,0,0,0,232,74ZM96,194H30V86H96a26,26,0,0,1,26,26v92.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.83,37.83,0,0,0-26,10.33V112a26,26,0,0,1,26-26h66ZM91.2,44.4a46,46,0,0,1,73.6,0,6,6,0,1,1-9.6,7.2,34,34,0,0,0-54.4,0,6,6,0,1,1-9.6-7.2Z"/></svg>`;
}
