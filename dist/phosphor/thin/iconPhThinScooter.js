export const iconPhThinScooter = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,140a31.29,31.29,0,0,0-6.24.62l-34-101.88A4,4,0,0,0,168,36H136a4,4,0,0,0,0,8h29.12l19,57.14-58,70.86H76a32,32,0,1,0-1,8h53a4,4,0,0,0,3.09-1.46l56.06-68.43,11,33A32,32,0,1,0,212,140ZM44,196a24,24,0,1,1,24-24A24,24,0,0,1,44,196Zm168,0a24,24,0,1,1,24-24A24,24,0,0,1,212,196Z"/></svg>`;
}
