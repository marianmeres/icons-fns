export const iconPhBoldBluetoothX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M183.2,166.4,132,128l11.61-8.71a12,12,0,1,0-14.4-19.2L124,104V56l5.21,3.91a12,12,0,1,0,14.4-19.2L119.2,22.4A12,12,0,0,0,100,32v72L55.2,70.4A12,12,0,0,0,40.8,89.6L92,128,40.8,166.4a12,12,0,1,0,14.4,19.2L100,152v72a12,12,0,0,0,19.2,9.6l64-48a12,12,0,0,0,0-19.2ZM124,200V152l32,24ZM240.49,95.51a12,12,0,0,1-17,17L208,97l-15.51,15.52a12,12,0,1,1-17-17L191,80,175.52,64.49a12,12,0,1,1,17-17L208,63l15.51-15.52a12,12,0,0,1,17,17L225,80Z"/></svg>`;
}
