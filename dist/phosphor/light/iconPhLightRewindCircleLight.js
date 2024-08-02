export const iconPhLightRewindCircleLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM174.68,86.63a6,6,0,0,0-6.28.57L122,122V92a6,6,0,0,0-9.6-4.8l-48,36a6,6,0,0,0,0,9.6l48,36A6,6,0,0,0,122,164V134l46.4,34.8A6,6,0,0,0,178,164V92A6,6,0,0,0,174.68,86.63ZM110,152,78,128l32-24Zm56,0-32-24,32-24Z"/></svg>`;
}
