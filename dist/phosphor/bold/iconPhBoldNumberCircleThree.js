export const iconPhBoldNumberCircleThree = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm36-60a40,40,0,0,1-68.57,28,12,12,0,1,1,17.14-16.79A16,16,0,1,0,124,136a12,12,0,0,1-9.83-18.88L129,96H104a12,12,0,0,1,0-24h48a12,12,0,0,1,9.83,18.88l-18.34,26.2A40,40,0,0,1,164,152Z"/></svg>`;
}
