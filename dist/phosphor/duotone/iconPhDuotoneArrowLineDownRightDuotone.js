export const iconPhDuotoneArrowLineDownRightDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,104v96H96Z" opacity="0.2"/><path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Zm-24,64v96a8,8,0,0,1-8,8H96a8,8,0,0,1-5.66-13.66L132.69,152,74.34,93.66A8,8,0,0,1,85.66,82.34L144,140.69l42.34-42.35A8,8,0,0,1,200,104Zm-16,19.31-34.34,34.35h0L115.31,192H184Z"/></svg>`;
}
