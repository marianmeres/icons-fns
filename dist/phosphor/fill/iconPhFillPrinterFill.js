export const iconPhFillPrinterFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,96v80a8,8,0,0,1-8,8H200v32a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V184H24a8,8,0,0,1-8-8V96c0-13.23,11.36-24,25.33-24H56V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V72h14.67C228.64,72,240,82.77,240,96ZM72,72H184V48H72Zm112,88H72v48H184Zm16-44a12,12,0,1,0-12,12A12,12,0,0,0,200,116Z"/></svg>`;
}
