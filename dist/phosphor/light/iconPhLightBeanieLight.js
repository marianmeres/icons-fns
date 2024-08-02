export const iconPhLightBeanieLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,163.37V144a94.17,94.17,0,0,0-73.7-91.79,26,26,0,1,0-40.6,0A94.17,94.17,0,0,0,34,144v19.37A14,14,0,0,0,26,176v32a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V176A14,14,0,0,0,222,163.37ZM114,36a14,14,0,1,1,14,14A14,14,0,0,1,114,36Zm14,26a82.1,82.1,0,0,1,82,82v18H46V144A82.1,82.1,0,0,1,128,62Zm-6,112v36H78V174Zm12,0h44v36H134ZM38,208V176a2,2,0,0,1,2-2H66v36H40A2,2,0,0,1,38,208Zm180,0a2,2,0,0,1-2,2H190V174h26a2,2,0,0,1,2,2Z"/></svg>`;
}
