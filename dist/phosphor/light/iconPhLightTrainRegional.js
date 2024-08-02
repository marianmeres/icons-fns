export const iconPhLightTrainRegional = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M221.79,118.42,199.4,36.32A14,14,0,0,0,185.89,26H70.11A14,14,0,0,0,56.6,36.32l-22.39,82.1a6,6,0,0,0,0,3.16l22.39,82.1A14,14,0,0,0,70.11,214H84L67.2,236.4a6,6,0,1,0,9.6,7.2L99,214h58l22.2,29.6a6,6,0,0,0,9.6-7.2L172,214h13.89a14,14,0,0,0,13.51-10.32l22.39-82.1A6,6,0,0,0,221.79,118.42ZM68.18,39.47A2,2,0,0,1,70.11,38H185.89a2,2,0,0,1,1.93,1.47l20.67,75.8L128,129.9,47.51,115.27Zm0,161.06L48.29,127.61,122,141v61H70.11A2,2,0,0,1,68.18,200.53Zm119.64,0a2,2,0,0,1-1.93,1.47H134V141l73.71-13.4ZM90,88a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,88Z"/></svg>`;
}
