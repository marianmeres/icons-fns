export const iconPhBoldPercentBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208.49,64.47l-144,144a12,12,0,1,1-17-17l144-144a12,12,0,0,1,17,17ZM47.72,104.27A40,40,0,1,1,76,116,39.72,39.72,0,0,1,47.72,104.27ZM60,76a16,16,0,1,0,4.69-11.31A15.87,15.87,0,0,0,60,76ZM220,180a40,40,0,1,1-11.72-28.29A39.71,39.71,0,0,1,220,180Zm-24,0a15.87,15.87,0,0,0-4.69-11.32h0A16,16,0,1,0,196,180Z"/></svg>`;
}
