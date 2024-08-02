export const iconPhLightCameraPlusLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M166,136a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V142H96a6,6,0,0,1,0-12h26V104a6,6,0,0,1,12,0v26h26A6,6,0,0,1,166,136Zm64-56V192a22,22,0,0,1-22,22H48a22,22,0,0,1-22-22V80A22,22,0,0,1,48,58H76.79L88.63,40.23A14,14,0,0,1,100.28,34h55.44a14,14,0,0,1,11.65,6.23L179.21,58H208A22,22,0,0,1,230,80Zm-12,0a10,10,0,0,0-10-10H176a6,6,0,0,1-5-2.67L157.38,46.89a2,2,0,0,0-1.66-.89H100.28a2,2,0,0,0-1.66.89L85,67.33A6,6,0,0,1,80,70H48A10,10,0,0,0,38,80V192a10,10,0,0,0,10,10H208a10,10,0,0,0,10-10Z"/></svg>`;
}
