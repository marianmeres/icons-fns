export const iconPhThinBackspaceThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,44H68.53a12.06,12.06,0,0,0-10.29,5.83L12.57,125.94a4,4,0,0,0,0,4.12l45.67,76.11A12.06,12.06,0,0,0,68.53,212H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,156a4,4,0,0,1-4,4H68.53a4,4,0,0,1-3.43-1.94L20.67,128,65.1,53.94A4,4,0,0,1,68.53,52H216a4,4,0,0,1,4,4Zm-57.17-93.17L141.66,128l21.17,21.17a4,4,0,0,1-5.66,5.66L136,133.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L130.34,128l-21.17-21.17a4,4,0,0,1,5.66-5.66L136,122.34l21.17-21.17a4,4,0,1,1,5.66,5.66Z"/></svg>`;
}
