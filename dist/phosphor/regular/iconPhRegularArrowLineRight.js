export const iconPhRegularArrowLineRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M189.66,122.34a8,8,0,0,1,0,11.32l-72,72a8,8,0,0,1-11.32-11.32L164.69,136H32a8,8,0,0,1,0-16H164.69L106.34,61.66a8,8,0,0,1,11.32-11.32ZM216,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"/></svg>`;
}
