export const iconPhLightFileDashed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M78,224a6,6,0,0,1-6,6H56a14,14,0,0,1-14-14V184a6,6,0,0,1,12,0v32a2,2,0,0,0,2,2H72A6,6,0,0,1,78,224ZM214,88v48a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H120a6,6,0,0,1,0-12h32a6,6,0,0,1,4.24,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.51L158,46.49ZM80,26H56A14,14,0,0,0,42,40V64a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2H80a6,6,0,0,0,0-12ZM208,170a6,6,0,0,0-6,6v40a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14V176A6,6,0,0,0,208,170ZM48,150a6,6,0,0,0,6-6V104a6,6,0,0,0-12,0v40A6,6,0,0,0,48,150Zm104,68H112a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Z"/></svg>`;
}
