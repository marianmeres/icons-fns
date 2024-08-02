export const iconPhThinArrowArcRightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,88v64a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h54.3l-29.24-29A92,92,0,0,0,36,184a4,4,0,0,1-8,0,100,100,0,0,1,170.71-70.71L228,142.39V88a4,4,0,0,1,8,0Z"/></svg>`;
}
