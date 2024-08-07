export const iconPhLightHandPalm = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M188,90a25.8,25.8,0,0,0-14,4.11V60a26,26,0,0,0-40.59-21.51A26,26,0,0,0,82,44V54.11A26,26,0,0,0,42,76v76a86,86,0,0,0,172,0V116A26,26,0,0,0,188,90Zm14,62a74,74,0,0,1-148,0V76a14,14,0,0,1,28,0v44a6,6,0,0,0,12,0V44a14,14,0,0,1,28,0v68a6,6,0,0,0,12,0V60a14,14,0,0,1,28,0v70.39A46.07,46.07,0,0,0,122,176a6,6,0,0,0,12,0,34,34,0,0,1,34-34,6,6,0,0,0,6-6V116a14,14,0,0,1,28,0Z"/></svg>`;
}
