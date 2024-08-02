export const iconPhLightFileIni = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M46,152v56a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0Zm74-6a6,6,0,0,0-6,6v37.28L84.88,148.51A6,6,0,0,0,74,152v56a6,6,0,0,0,12,0V170.72l29.12,40.77A6,6,0,0,0,120,214a5.78,5.78,0,0,0,1.83-.29A6,6,0,0,0,126,208V152A6,6,0,0,0,120,146Zm40,0a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V152A6,6,0,0,0,160,146Zm54-58V224a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.52L158,46.48Z"/></svg>`;
}
