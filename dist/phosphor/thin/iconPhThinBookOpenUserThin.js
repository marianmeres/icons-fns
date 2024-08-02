export const iconPhThinBookOpenUserThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,76H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,76H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V80A4,4,0,0,0,232,76ZM96,196H28V84H96a28,28,0,0,1,28,28v97.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V112a28,28,0,0,1,28-28h68ZM92.8,45.6a44,44,0,0,1,70.4,0,4,4,0,0,1-6.4,4.8,36,36,0,0,0-57.6,0,4,4,0,1,1-6.4-4.8Z"/></svg>`;
}
