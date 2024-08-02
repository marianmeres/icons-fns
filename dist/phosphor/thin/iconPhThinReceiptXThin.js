export const iconPhThinReceiptXThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,44H40A12,12,0,0,0,28,56V208a4,4,0,0,0,5.79,3.58L64,196.47l30.21,15.11a4,4,0,0,0,3.58,0L128,196.47l30.21,15.11a4,4,0,0,0,3.58,0L192,196.47l30.21,15.11A4.05,4.05,0,0,0,224,212a4,4,0,0,0,4-4V56A12,12,0,0,0,216,44Zm4,157.53-26.21-13.11a4,4,0,0,0-3.58,0L160,203.53l-30.21-15.11a4,4,0,0,0-3.58,0L96,203.53,65.79,188.42a4,4,0,0,0-3.58,0L36,201.53V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM154.83,98.83,133.66,120l21.17,21.17a4,4,0,0,1-5.66,5.66L128,125.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L122.34,120,101.17,98.83a4,4,0,0,1,5.66-5.66L128,114.34l21.17-21.17a4,4,0,1,1,5.66,5.66Z"/></svg>`;
}
