export const iconPhThinMouseScroll = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M144,20H112A60.07,60.07,0,0,0,52,80v96a60.07,60.07,0,0,0,60,60h32a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,144,20Zm52,156a52.06,52.06,0,0,1-52,52H112a52.06,52.06,0,0,1-52-52V80a52.06,52.06,0,0,1,52-52h32a52.06,52.06,0,0,1,52,52ZM132,73.66V182.34l17.17-17.17a4,4,0,0,1,5.66,5.66l-24,24a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L124,182.34V73.66L106.83,90.83a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0l24,24a4,4,0,0,1-5.66,5.66Z"/></svg>`;
}
