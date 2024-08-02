export const iconPhThinBellZThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M148,144a4,4,0,0,1-4,4H112a4,4,0,0,1-3.33-6.22L136.53,100H112a4,4,0,0,1,0-8h32a4,4,0,0,1,3.33,6.22L119.47,140H144A4,4,0,0,1,148,144Zm70.38,46A11.84,11.84,0,0,1,208,196H163.77a36,36,0,0,1-71.54,0H48A12,12,0,0,1,37.65,178C43.42,168,52,140.13,52,104a76,76,0,1,1,152,0c0,36.13,8.59,64,14.36,73.95A11.92,11.92,0,0,1,218.38,190Zm-62.67,6H100.29a28,28,0,0,0,55.42,0Zm55.72-14C204,169.17,196,139.31,196,104a68,68,0,1,0-136,0c0,35.32-8,65.17-15.44,78a4,4,0,0,0,0,4A3.91,3.91,0,0,0,48,188H208a3.91,3.91,0,0,0,3.44-2A4,4,0,0,0,211.43,182Z"/></svg>`;
}
