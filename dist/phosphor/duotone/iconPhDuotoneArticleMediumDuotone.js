export const iconPhDuotoneArticleMediumDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,104v96H80V168h88V104Z" opacity="0.2"/><path d="M56,136a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16h8V64H24a8,8,0,0,1,0-16H40v0a8,8,0,0,1,6.78,3.74L80,104.91l33.22-53.15A8,8,0,0,1,120,48v0h16a8,8,0,0,1,0,16h-8v64h8a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16V83.89L86.78,124.24a8,8,0,0,1-13.56,0L48,83.89V128A8,8,0,0,1,56,136Zm112-24h64a8,8,0,0,0,0-16H168a8,8,0,0,0,0,16Zm64,16H168a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z"/></svg>`;
}
