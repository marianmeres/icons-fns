export const iconPhLightUserList = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M154,80a6,6,0,0,1,6-6h88a6,6,0,0,1,0,12H160A6,6,0,0,1,154,80Zm94,42H160a6,6,0,0,0,0,12h88a6,6,0,0,0,0-12Zm0,48H184a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm-98.19,20.5a6,6,0,1,1-11.62,3C131.7,168.29,107.23,150,80,150s-51.7,18.29-58.19,43.49a6,6,0,1,1-11.62-3c5.74-22.28,23-40.07,44.67-48a46,46,0,1,1,50.28,0C126.79,150.43,144.08,168.22,149.81,190.5ZM80,138a34,34,0,1,0-34-34A34,34,0,0,0,80,138Z"/></svg>`;
}
