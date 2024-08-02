export const iconPhLightFourKLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M26,48a6,6,0,0,1,6-6H224a6,6,0,0,1,0,12H32A6,6,0,0,1,26,48ZM224,202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12ZM144,74a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V146.25l15.42-17.62L194.82,179a6,6,0,0,0,5.19,3,5.91,5.91,0,0,0,3-.82,6,6,0,0,0,2.16-8.2L173.76,119.1,204.52,84a6,6,0,0,0-9-7.9L150,128V80A6,6,0,0,0,144,74ZM90,176V158H40a6,6,0,0,1-4.74-9.68l56-72A6,6,0,0,1,102,80v66h10a6,6,0,0,1,0,12H102v18a6,6,0,0,1-12,0Zm0-30V97.49L52.27,146Z"/></svg>`;
}
