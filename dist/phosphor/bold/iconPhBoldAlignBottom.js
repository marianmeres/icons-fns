export const iconPhBoldAlignBottom = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216Zm-92-48V80a20,20,0,0,1,20-20h36a20,20,0,0,1,20,20v88a20,20,0,0,1-20,20H156A20,20,0,0,1,136,168Zm24-4h28V84H160ZM44,168V40A20,20,0,0,1,64,20h36a20,20,0,0,1,20,20V168a20,20,0,0,1-20,20H64A20,20,0,0,1,44,168Zm24-4H96V44H68Z"/></svg>`;
}
