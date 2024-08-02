export const iconPhThinBluetoothX = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M178.4,172.8,118.67,128l27.73-20.8a4,4,0,1,0-4.8-6.4L116,120V40l25.6,19.2a4,4,0,0,0,4.8-6.4l-32-24A4,4,0,0,0,108,32v88L50.4,76.8a4,4,0,0,0-4.8,6.4L105.33,128,45.6,172.8a4,4,0,0,0,4.8,6.4L108,136v88a4,4,0,0,0,2.21,3.58A4.05,4.05,0,0,0,112,228a4,4,0,0,0,2.4-.8l64-48a4,4,0,0,0,0-6.4ZM116,216V136l53.33,40ZM234.83,101.17a4,4,0,0,1-5.66,5.66L208,85.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L202.34,80,181.17,58.83a4,4,0,0,1,5.66-5.66L208,74.34l21.17-21.17a4,4,0,1,1,5.66,5.66L213.66,80Z"/></svg>`;
}
