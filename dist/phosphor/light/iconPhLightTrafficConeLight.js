export const iconPhLightTrafficConeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,210H212.27L151.54,35.4A14,14,0,0,0,138.31,26H117.69a14,14,0,0,0-13.23,9.4L43.73,210H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM94,102h68l18.08,52H75.92Zm21.8-62.66A2,2,0,0,1,117.69,38h20.62a2,2,0,0,1,1.89,1.34L157.82,90H98.18ZM71.74,166H184.26l15.3,44H56.44Z"/></svg>`;
}
