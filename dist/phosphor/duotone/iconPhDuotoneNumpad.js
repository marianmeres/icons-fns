export const iconPhDuotoneNumpad = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,48V200a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V48Z" opacity="0.2"/><path d="M80,48A16,16,0,1,1,64,32,16,16,0,0,1,80,48Zm48-16a16,16,0,1,0,16,16A16,16,0,0,0,128,32Zm64,32a16,16,0,1,0-16-16A16,16,0,0,0,192,64ZM64,88a16,16,0,1,0,16,16A16,16,0,0,0,64,88Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,128,88Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,192,88ZM64,144a16,16,0,1,0,16,16A16,16,0,0,0,64,144Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,128,144Zm0,56a16,16,0,1,0,16,16A16,16,0,0,0,128,200Zm64-56a16,16,0,1,0,16,16A16,16,0,0,0,192,144Z"/></svg>`;
}
