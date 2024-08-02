export const iconPhBoldTrademarkRegistered = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm28.7-70.58A36,36,0,0,0,136,76H104A12,12,0,0,0,92,88v80a12,12,0,0,0,24,0V148h16.24L150,174.66a12,12,0,0,0,20-13.32ZM116,100h20a12,12,0,0,1,0,24H116Z"/></svg>`;
}
