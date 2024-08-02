export const iconPhThinHandWithdrawThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,198.65V240a4,4,0,0,1-8,0V198.65a78.83,78.83,0,0,0-32-63.18v66.84a4,4,0,0,1-7.35,2.19L170,188.19l-.12-.19a16,16,0,0,0-27.77,15.91l22.2,33.9a4,4,0,1,1-6.69,4.38l-22.26-34a1.22,1.22,0,0,1-.12-.19,24,24,0,0,1,41.51-24.1l3.27,5V64a4,4,0,0,0-4-4H160a4,4,0,0,1,0-8h16a12,12,0,0,1,12,12v61.78A86.84,86.84,0,0,1,228,198.65ZM80,52H64A12,12,0,0,0,52,64V200a4,4,0,0,0,8,0V64a4,4,0,0,1,4-4H80a4,4,0,0,0,0-8Zm74.83,49.17a4,4,0,0,0-5.66,0L124,126.34V16a4,4,0,0,0-8,0V126.34L90.83,101.17a4,4,0,0,0-5.66,5.66l32,32a4,4,0,0,0,5.66,0l32-32A4,4,0,0,0,154.83,101.17Z"/></svg>`;
}
