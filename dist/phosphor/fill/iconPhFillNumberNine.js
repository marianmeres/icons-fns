export const iconPhFillNumberNine = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM166.3,129.62,132.62,188a8,8,0,0,1-13.86-8l16.52-28.61A44.79,44.79,0,0,1,128,152a44.05,44.05,0,1,1,38.3-22.38ZM156,108a28,28,0,1,1-28-28A28,28,0,0,1,156,108Z"/></svg>`;
}
