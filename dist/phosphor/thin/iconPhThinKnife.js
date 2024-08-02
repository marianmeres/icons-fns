export const iconPhThinKnife = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M229,35a23.83,23.83,0,0,0-33.66,0L21.17,209.22a4,4,0,0,0,1.93,6.72A156.23,156.23,0,0,0,58.4,220c39.41,0,72.27-15.08,94.78-29.6,31.21-20.14,49.23-43,50-43.91a4,4,0,0,0-.32-5.29L179.67,118,229,68.63A23.84,23.84,0,0,0,229,35ZM194.59,144.27a222.43,222.43,0,0,1-46,39.55c-37.85,24.35-77,33-116.55,25.81L146,95.67ZM223.38,63,174,112.36,151.66,90,201,40.62A15.8,15.8,0,0,1,223.38,63Z"/></svg>`;
}
