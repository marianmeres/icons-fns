export const iconPhBoldSplitVertical = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,152a12,12,0,0,1-12,12H140v39l11.51-11.52a12,12,0,0,1,17,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L116,203V164H48a12,12,0,0,1,0-24H208A12,12,0,0,1,220,152ZM48,116H208a12,12,0,0,0,0-24H140V53l11.51,11.52a12,12,0,1,0,17-17l-32-32a12,12,0,0,0-17,0l-32,32a12,12,0,1,0,17,17L116,53V92H48a12,12,0,0,0,0,24Z"/></svg>`;
}
