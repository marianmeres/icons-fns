export const iconPhThinTextHThreeThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,180a32,32,0,0,1-54.86,22.4,4,4,0,0,1,5.72-5.6A24,24,0,1,0,212,156a4,4,0,0,1-3.28-6.29L232.32,116H192a4,4,0,0,1,0-8h48a4,4,0,0,1,3.28,6.29L219.12,148.8A32.06,32.06,0,0,1,244,180ZM144,52a4,4,0,0,0-4,4v56H44V56a4,4,0,0,0-8,0V176a4,4,0,0,0,8,0V120h96v56a4,4,0,0,0,8,0V56A4,4,0,0,0,144,52Z"/></svg>`;
}
