export const iconPhBoldTruckTrailerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,93.65A60.08,60.08,0,0,0,164,36a20,20,0,0,0-20,20V172H128V72a12,12,0,0,0-12-12H20A20,20,0,0,0,0,80V184a36,36,0,0,0,60,26.8A36,36,0,0,0,117.94,196h68.12A36,36,0,0,0,256,184V136A44.08,44.08,0,0,0,224,93.65ZM168,60.22A36.06,36.06,0,0,1,200,96v8a12,12,0,0,0,12,12,20,20,0,0,1,20,20v14.06A36,36,0,0,0,186.06,172H168ZM104,84v70.08a35.92,35.92,0,0,0-44,3.12,35.93,35.93,0,0,0-36-7.14V84ZM36,196a12,12,0,1,1,12-12A12,12,0,0,1,36,196Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,84,196Zm136,0a12,12,0,1,1,12-12A12,12,0,0,1,220,196Z"/></svg>`;
}
