export const iconPhBoldSubtitles = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H36V68H220ZM48,128a12,12,0,0,1,12-12H76a12,12,0,0,1,0,24H60A12,12,0,0,1,48,128Zm56,0a12,12,0,0,1,12-12h80a12,12,0,0,1,0,24H116A12,12,0,0,1,104,128ZM48,164a12,12,0,0,1,12-12h80a12,12,0,0,1,0,24H60A12,12,0,0,1,48,164Zm160,0a12,12,0,0,1-12,12H180a12,12,0,0,1,0-24h16A12,12,0,0,1,208,164Z"/></svg>`;
}
