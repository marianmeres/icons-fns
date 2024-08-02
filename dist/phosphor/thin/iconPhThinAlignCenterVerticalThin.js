export const iconPhThinAlignCenterVerticalThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,124H204V72a12,12,0,0,0-12-12H152a12,12,0,0,0-12,12v52H116V48a12,12,0,0,0-12-12H64A12,12,0,0,0,52,48v76H32a4,4,0,0,0,0,8H52v76a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V132h24v52a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V132h20a4,4,0,0,0,0-8ZM108,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4Zm88-24a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4Z"/></svg>`;
}
