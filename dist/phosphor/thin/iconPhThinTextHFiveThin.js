export const iconPhThinTextHFiveThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,180a32,32,0,0,1-32,32,31.62,31.62,0,0,1-22.86-9.2,4,4,0,0,1,5.72-5.6A23.67,23.67,0,0,0,212,204a24,24,0,0,0,0-48,23.67,23.67,0,0,0-17.14,6.8,4,4,0,0,1-6.81-3.46l8-48A4,4,0,0,1,200,108h40a4,4,0,0,1,0,8H203.39l-5.87,35.21A33.26,33.26,0,0,1,212,148,32,32,0,0,1,244,180ZM144,52a4,4,0,0,0-4,4v56H44V56a4,4,0,0,0-8,0V176a4,4,0,0,0,8,0V120h96v56a4,4,0,0,0,8,0V56A4,4,0,0,0,144,52Z"/></svg>`;
}
