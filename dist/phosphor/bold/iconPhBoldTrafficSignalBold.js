export const iconPhBoldTrafficSignalBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,140H204V84h12a12,12,0,0,0,0-24H204V40a20,20,0,0,0-20-20H72A20,20,0,0,0,52,40V60H40a12,12,0,0,0,0,24H52v56H40a12,12,0,0,0,0,24H52v52a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20V164h12a12,12,0,0,0,0-24Zm-36,72H76V44H180Zm-52-92A32,32,0,1,0,96,88,32,32,0,0,0,128,120Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,80Zm0,120a32,32,0,1,0-32-32A32,32,0,0,0,128,200Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,160Z"/></svg>`;
}
