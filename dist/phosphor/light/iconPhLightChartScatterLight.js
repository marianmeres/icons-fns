export const iconPhLightChartScatterLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V202H224A6,6,0,0,1,230,208Zm-98-50a10,10,0,1,0-10-10A10,10,0,0,0,132,158Zm-24-56A10,10,0,1,0,98,92,10,10,0,0,0,108,102ZM76,174a10,10,0,1,0-10-10A10,10,0,0,0,76,174Zm96-48a10,10,0,1,0-10-10A10,10,0,0,0,172,126Zm24-40a10,10,0,1,0-10-10A10,10,0,0,0,196,86Zm-8,68a10,10,0,1,0,10,10A10,10,0,0,0,188,154Z"/></svg>`;
}
