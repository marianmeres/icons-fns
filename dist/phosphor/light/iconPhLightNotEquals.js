export const iconPhLightNotEquals = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,160a6,6,0,0,1-6,6H101.56L52.44,220A6,6,0,1,1,43.56,212l41.79-46H40a6,6,0,0,1,0-12H96.25l47.28-52H40a6,6,0,0,1,0-12H154.44l49.12-54A6,6,0,1,1,212.44,44L170.65,90H216a6,6,0,0,1,0,12H159.75l-47.28,52H216A6,6,0,0,1,222,160Z"/></svg>`;
}
