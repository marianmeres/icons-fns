export const iconPhBoldPopsicle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,4A76.08,76.08,0,0,0,52,80v96a20,20,0,0,0,20,20H96v28a32,32,0,0,0,64,0V196h24a20,20,0,0,0,20-20V80A76.08,76.08,0,0,0,128,4Zm8,220a8,8,0,0,1-16,0V196h16Zm44-52H76V80a52,52,0,0,1,104,0ZM120,76v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Zm40,0v68a12,12,0,0,1-24,0V76a12,12,0,0,1,24,0Z"/></svg>`;
}
