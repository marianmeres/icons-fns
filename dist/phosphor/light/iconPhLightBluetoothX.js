export const iconPhLightBluetoothX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M179.6,171.2,122,128l25.6-19.2a6,6,0,1,0-7.2-9.6L118,116V44l22.4,16.8a6,6,0,1,0,7.2-9.6l-32-24A6,6,0,0,0,106,32v84L51.6,75.2a6,6,0,0,0-7.2,9.6L102,128,44.4,171.2a6,6,0,0,0,7.2,9.6L106,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM118,212V140l48,36ZM236.24,99.76a6,6,0,1,1-8.48,8.48L208,88.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L199.51,80,179.76,60.24a6,6,0,0,1,8.48-8.48L208,71.51l19.76-19.75a6,6,0,0,1,8.48,8.48L216.49,80Z"/></svg>`;
}
