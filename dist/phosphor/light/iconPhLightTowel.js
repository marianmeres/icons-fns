export const iconPhLightTowel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,26H72A22,22,0,0,0,50,48V216a14,14,0,0,0,14,14H176a14,14,0,0,0,14-14V48a10,10,0,0,1,20,0V152a6,6,0,0,0,12,0V48A22,22,0,0,0,200,26ZM72,38H180.41A21.84,21.84,0,0,0,178,48V186H62V48A10,10,0,0,1,72,38ZM176,218H64a2,2,0,0,1-2-2V198H178v18A2,2,0,0,1,176,218Z"/></svg>`;
}
