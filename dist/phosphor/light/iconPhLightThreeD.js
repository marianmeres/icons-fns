export const iconPhLightThreeD = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M98,148a22,22,0,0,0-22-22,6,6,0,0,1-4.92-9.44L92.48,86H56a6,6,0,0,1,0-12h48a6,6,0,0,1,4.92,9.44L86.39,115.62a34,34,0,1,1-34.68,56.17,6,6,0,0,1,8.58-8.39A22,22,0,0,0,98,148Zm62-74a54,54,0,0,1,0,108H136a6,6,0,0,1-6-6V80a6,6,0,0,1,6-6Zm0,12H142v84h18a42,42,0,0,0,0-84ZM32,54H224a6,6,0,0,0,0-12H32a6,6,0,0,0,0,12ZM224,202H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Z"/></svg>`;
}
