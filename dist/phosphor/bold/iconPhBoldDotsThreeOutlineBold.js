export const iconPhBoldDotsThreeOutlineBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136Zm80-40a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,208,136ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,48,136Z"/></svg>`;
}
