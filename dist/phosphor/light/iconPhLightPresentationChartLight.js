export const iconPhLightPresentationChartLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,42H134V24a6,6,0,0,0-12,0V42H40A14,14,0,0,0,26,56V176a14,14,0,0,0,14,14H83.52L59.31,220.25a6,6,0,0,0,9.38,7.5L98.88,190h58.24l30.19,37.75a6,6,0,0,0,9.38-7.5L172.48,190H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,134a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM102,120v24a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm32-16v40a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm32-16v56a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Z"/></svg>`;
}
