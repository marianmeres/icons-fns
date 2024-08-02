export const iconPhThinGenderIntersexThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,28H168a4,4,0,0,0,0,8h30.34L163.55,70.79A60,60,0,1,0,116,171.85V196H88a4,4,0,0,0,0,8h28v28a4,4,0,0,0,8,0V204h28a4,4,0,0,0,0-8H124V171.85A59.94,59.94,0,0,0,168.68,77L204,41.66V72a4,4,0,0,0,8,0V32A4,4,0,0,0,208,28ZM120,164a52,52,0,1,1,52-52A52.06,52.06,0,0,1,120,164Z"/></svg>`;
}
