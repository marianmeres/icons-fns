export const iconPhDuotoneSelectionBackground = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,48V160a8,8,0,0,1-8,8H168V96a8,8,0,0,0-8-8H88V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"/><path d="M160,80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16V96A16,16,0,0,0,160,80Zm0,128H48V96H160ZM136,40a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H144A8,8,0,0,1,136,40Zm88,8v8a8,8,0,0,1-16,0V48h-8a8,8,0,0,1,0-16h8A16,16,0,0,1,224,48Zm0,48v16a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm0,56v8a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0ZM80,56V48A16,16,0,0,1,96,32h8a8,8,0,0,1,0,16H96v8a8,8,0,0,1-16,0Z"/></svg>`;
}
