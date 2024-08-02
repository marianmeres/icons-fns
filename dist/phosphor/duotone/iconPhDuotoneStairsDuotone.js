export const iconPhDuotoneStairsDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,40V96H152v40H104v40H48V40a8,8,0,0,1,8-8H200A8,8,0,0,1,208,40Z" opacity="0.2"/><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM152,144h48v24H112V144Zm8-16V104h40v24Zm40-88V88H152a8,8,0,0,0-8,8v32H104a8,8,0,0,0-8,8v32H56V40Zm0,176H56V184H200v32Z"/></svg>`;
}
