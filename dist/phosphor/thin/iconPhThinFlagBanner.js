export const iconPhThinFlagBanner = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.38,53.86A4,4,0,0,0,232,52H40a4,4,0,0,0-2.83,6.83L82.34,104,37.17,149.17A4,4,0,0,0,40,156H180l-31.56,66.28a4,4,0,0,0,1.89,5.33A3.92,3.92,0,0,0,152,228a4,4,0,0,0,3.61-2.28l80-168A4,4,0,0,0,235.38,53.86ZM183.76,148H49.66l41.17-41.17a4,4,0,0,0,0-5.66L49.66,60h176Z"/></svg>`;
}
