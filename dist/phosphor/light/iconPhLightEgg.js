export const iconPhLightEgg = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M185,60.67C167.18,34,145.87,18,128,18S88.82,34,71,60.67C52.57,88.32,42,121.61,42,152a86,86,0,0,0,172,0C214,121.61,203.43,88.32,185,60.67ZM128,226a74.09,74.09,0,0,1-74-74c0-28.08,9.84-58.94,27-84.67C96.11,44.65,114.56,30,128,30s31.89,14.65,47,37.33c17.15,25.73,27,56.59,27,84.67A74.09,74.09,0,0,1,128,226Z"/></svg>`;
}
