export const iconPhLightClosedCaptioning = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,142a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM117.19,152.71a6,6,0,0,1-2.19,8.2,38,38,0,1,1,0-65.82,6,6,0,1,1-6,10.38,26,26,0,1,0,0,45.05A6,6,0,0,1,117.19,152.71Zm80,0a6,6,0,0,1-2.19,8.2,38,38,0,1,1,0-65.82,6,6,0,1,1-6,10.38,26,26,0,1,0,0,45.05A6,6,0,0,1,197.19,152.71Z"/></svg>`;
}
