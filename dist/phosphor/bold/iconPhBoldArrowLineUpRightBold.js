export const iconPhBoldArrowLineUpRightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM80,180a12,12,0,0,0,8.49-3.51L180,85v67a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H96a12,12,0,0,0,0,24h67L71.51,159.51A12,12,0,0,0,80,180Z"/></svg>`;
}
