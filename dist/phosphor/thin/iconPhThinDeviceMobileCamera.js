export const iconPhThinDeviceMobileCamera = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,20H80A20,20,0,0,0,60,40V216a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V40A20,20,0,0,0,176,20Zm12,196a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V40A12,12,0,0,1,80,28h96a12,12,0,0,1,12,12ZM136,60a8,8,0,1,1-8-8A8,8,0,0,1,136,60Z"/></svg>`;
}
