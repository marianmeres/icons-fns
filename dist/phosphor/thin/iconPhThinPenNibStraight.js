export const iconPhThinPenNibStraight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M218.75,125.66a1.14,1.14,0,0,0-.1-.19L188,70.94V32a12,12,0,0,0-12-12H80A12,12,0,0,0,68,32V71L37.34,125.47l-.1.19a12,12,0,0,0,1.15,12.5l86.44,112.28a4,4,0,0,0,6.34,0l86.49-112.35A12,12,0,0,0,218.75,125.66ZM80,28h96a4,4,0,0,1,4,4V68H76V32A4,4,0,0,1,80,28Zm48,120a16,16,0,1,1,16-16A16,16,0,0,1,128,148Zm83.27-14.72L132,236.25V155.66a24,24,0,1,0-8,0v80.58L44.78,133.34a4,4,0,0,1-.4-4.06L74.35,76H181.66l30,53.28A4,4,0,0,1,211.27,133.28Z"/></svg>`;
}
