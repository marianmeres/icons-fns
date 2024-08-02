export const iconPhLightGolfLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,100a10,10,0,1,1-10-10A10,10,0,0,1,174,100Zm-42,22a10,10,0,1,0,10,10A10,10,0,0,0,132,122Zm82-26a86,86,0,1,1-86-86A86.1,86.1,0,0,1,214,96Zm-12,0a74,74,0,1,0-74,74A74.09,74.09,0,0,0,202,96Zm-36.14,98.4c-13.38,5.11-25.77,7.6-37.86,7.6s-24.48-2.49-37.86-7.6a6,6,0,1,0-4.28,11.2A122.32,122.32,0,0,0,122,213.81V248a6,6,0,0,0,12,0V213.81a122.32,122.32,0,0,0,36.14-8.21,6,6,0,0,0-4.28-11.2Z"/></svg>`;
}
