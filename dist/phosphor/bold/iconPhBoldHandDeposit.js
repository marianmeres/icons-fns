export const iconPhBoldHandDeposit = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,140a12,12,0,0,1-12-12V45l-7.51,7.51a12,12,0,0,1-17-17l28-28a12,12,0,0,1,17,0l28,28a12,12,0,1,1-17,17L132,45v83A12,12,0,0,1,120,140Zm76-18.48V96a20,20,0,0,0-20-20H164a12,12,0,0,0,0,24h8v68.3A32,32,0,0,0,128.29,212c.11.2.23.39.35.58l22.26,34A12,12,0,1,0,171,233.43l-22-33.66a8,8,0,0,1,14-7.77c.11.2.23.39.36.58L174,208.88a12,12,0,0,0,22-6.57V154a70.66,70.66,0,0,1,16,44.61V240a12,12,0,0,0,24,0V198.65A94.91,94.91,0,0,0,196,121.52ZM76,76H64A20,20,0,0,0,44,96V200a12,12,0,0,0,24,0V100h8a12,12,0,0,0,0-24Z"/></svg>`;
}
