export const iconPhBoldIdentificationBadge = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-4,192H60V44H196ZM84,68A12,12,0,0,1,96,56h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,68Zm8.8,127.37a48,48,0,0,1,70.4,0,12,12,0,0,0,17.6-16.32,72,72,0,0,0-19.21-14.68,44,44,0,1,0-67.19,0,72.12,72.12,0,0,0-19.2,14.68,12,12,0,0,0,17.6,16.32ZM128,116a20,20,0,1,1-20,20A20,20,0,0,1,128,116Z"/></svg>`;
}
