export const iconPhThinCodeSimpleThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M90.66,67,22,128l68.64,61a4,4,0,0,1-5.32,6l-72-64a4,4,0,0,1,0-6l72-64a4,4,0,1,1,5.32,6Zm152,58-72-64a4,4,0,1,0-5.32,6L234,128l-68.64,61a4,4,0,0,0,5.32,6l72-64a4,4,0,0,0,0-6Z"/></svg>`;
}
