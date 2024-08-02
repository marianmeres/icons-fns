export const iconPhThinNumberFiveThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,160a52,52,0,0,1-86.67,38.76,4,4,0,1,1,5.34-6,44,44,0,1,0,.84-66.33A4,4,0,0,1,85,122.64l15.09-75.42A4,4,0,0,1,104,44h64a4,4,0,0,1,0,8H107.28L94.77,114.53A52,52,0,0,1,172,160Z"/></svg>`;
}
