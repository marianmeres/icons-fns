export const iconPhFillSelectionBackground = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M72,112h72v72H72ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM96,72a8,8,0,0,0,16,0h16a8,8,0,0,0,0-16H112A16,16,0,0,0,96,72Zm64,40a16,16,0,0,0-16-16H72a16,16,0,0,0-16,16v72a16,16,0,0,0,16,16h72a16,16,0,0,0,16-16Zm40,16a8,8,0,0,0-16,0v16a8,8,0,0,0,0,16,16,16,0,0,0,16-16Zm0-56a16,16,0,0,0-16-16H168a8,8,0,0,0,0,16h16V88a8,8,0,0,0,16,0Z"/></svg>`;
}
