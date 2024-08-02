export const iconPhBoldArrowCircleDownLeftBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM168.49,87.51a12,12,0,0,1,0,17L125,148h19a12,12,0,0,1,0,24H96a12,12,0,0,1-12-12V112a12,12,0,0,1,24,0v19l43.51-43.52A12,12,0,0,1,168.49,87.51Z"/></svg>`;
}
