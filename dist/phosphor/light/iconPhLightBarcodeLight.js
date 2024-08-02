export const iconPhLightBarcodeLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230,48V88a6,6,0,0,1-12,0V54H184a6,6,0,0,1,0-12h40A6,6,0,0,1,230,48ZM72,202H38V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H72a6,6,0,0,0,0-12Zm152-40a6,6,0,0,0-6,6v34H184a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,224,162ZM32,94a6,6,0,0,0,6-6V54H72a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6V88A6,6,0,0,0,32,94ZM80,82a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,80,82Zm102,86V88a6,6,0,0,0-12,0v80a6,6,0,0,0,12,0ZM144,82a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,144,82Zm-32,0a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,112,82Z"/></svg>`;
}
