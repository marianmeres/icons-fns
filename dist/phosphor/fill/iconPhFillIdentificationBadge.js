export const iconPhFillIdentificationBadge = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM96,48h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm84.81,150.4a8,8,0,0,1-11.21-1.6,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.6A67.88,67.88,0,0,1,101,165.51a40,40,0,1,1,53.94,0A67.88,67.88,0,0,1,182.4,187.2,8,8,0,0,1,180.81,198.4ZM152,136a24,24,0,1,1-24-24A24,24,0,0,1,152,136Z"/></svg>`;
}
