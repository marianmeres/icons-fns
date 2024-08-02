export const iconPhBoldLinkSimpleHorizontalBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M80,116h96a12,12,0,0,1,0,24H80a12,12,0,0,1,0-24Zm24,48H64a36,36,0,0,1,0-72h40a12,12,0,0,0,0-24H64a60,60,0,0,0,0,120h40a12,12,0,0,0,0-24Zm88-96H152a12,12,0,0,0,0,24h40a36,36,0,0,1,0,72H152a12,12,0,0,0,0,24h40a60,60,0,0,0,0-120Z"/></svg>`;
}
