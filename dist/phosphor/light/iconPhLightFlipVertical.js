export const iconPhLightFlipVertical = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56,118H216a14,14,0,0,0,5.46-26.9l-.11,0-159.95-64A14,14,0,0,0,42,40v64A14,14,0,0,0,56,118ZM54,40a2,2,0,0,1,2-2,2,2,0,0,1,.79.16l.11.05,159.92,64A2,2,0,0,1,216,106H56a2,2,0,0,1-2-2Zm162,98H56a14,14,0,0,0-14,14v64a14,14,0,0,0,19.39,12.92l160-64,.11-.05A14,14,0,0,0,216,138Zm.82,15.83-159.92,64-.11.05A2,2,0,0,1,54,216V152a2,2,0,0,1,2-2H216a2,2,0,0,1,.82,3.83Z"/></svg>`;
}
