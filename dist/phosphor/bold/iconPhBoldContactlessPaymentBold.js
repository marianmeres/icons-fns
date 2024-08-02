export const iconPhBoldContactlessPaymentBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152.58,66.35a130.61,130.61,0,0,1,0,123.3,12,12,0,1,1-21.17-11.3,106.7,106.7,0,0,0,0-100.7,12,12,0,1,1,21.16-11.3ZM100.36,77.41a12,12,0,0,0-5,16.23,73,73,0,0,1,0,68.72,12,12,0,1,0,21.18,11.28,97,97,0,0,0,0-91.28A12,12,0,0,0,100.36,77.41ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"/></svg>`;
}
