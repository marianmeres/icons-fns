export const iconPhThinStrategyThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M76,156a32,32,0,1,0,32,32A32,32,0,0,0,76,156Zm0,56a24,24,0,1,1,24-24A24,24,0,0,1,76,212ZM45.17,109.17,62.34,92,45.17,74.83a4,4,0,0,1,5.66-5.66L68,86.34,85.17,69.17a4,4,0,0,1,5.66,5.66L73.66,92l17.17,17.17a4,4,0,0,1-5.66,5.66L68,97.66,50.83,114.83a4,4,0,0,1-5.66-5.66Zm181.66,96a4,4,0,0,1-5.66,5.66L204,193.66l-17.17,17.17a4,4,0,0,1-5.66-5.66L198.34,188l-17.17-17.17a4,4,0,0,1,5.66-5.66L204,182.34l17.17-17.17a4,4,0,0,1,5.66,5.66L209.66,188Zm-46.21-93.41c-5.82,21-23.77,39.15-43.65,44.12a4.09,4.09,0,0,1-1,.12,4,4,0,0,1-1-7.88c16.94-4.24,32.87-20.42,37.88-38.49,3.47-12.53,3.55-31.51-15.74-50.8L148,49.66V80a4,4,0,0,1-8,0V40a4,4,0,0,1,4-4h40a4,4,0,0,1,0,8H153.66l9.17,9.17C180,70.35,186.33,91.16,180.62,111.76Z"/></svg>`;
}
