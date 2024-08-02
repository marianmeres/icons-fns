export const iconPhThinHandDepositThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M124,25.66V128a4,4,0,0,1-8,0V25.66L90.83,50.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66Zm64,100.12V96a12,12,0,0,0-12-12H160a4,4,0,0,0,0,8h16a4,4,0,0,1,4,4v92.9l-3.27-5A24,24,0,0,0,135.22,208a1.22,1.22,0,0,0,.12.19l22.26,34a4,4,0,1,0,6.69-4.38l-22.2-33.9A16,16,0,0,1,169.86,188l.12.19,10.67,16.31a4,4,0,0,0,7.35-2.19V135.47a78.83,78.83,0,0,1,32,63.18V240a4,4,0,0,0,8,0V198.65A86.84,86.84,0,0,0,188,125.78ZM80,84H64A12,12,0,0,0,52,96V200a4,4,0,0,0,8,0V96a4,4,0,0,1,4-4H80a4,4,0,0,0,0-8Z"/></svg>`;
}
