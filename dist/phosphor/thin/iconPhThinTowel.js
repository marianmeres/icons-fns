export const iconPhThinTowel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,28H72A20,20,0,0,0,52,48V216a12,12,0,0,0,12,12H176a12,12,0,0,0,12-12V48a12,12,0,0,1,24,0V152a4,4,0,0,0,8,0V48A20,20,0,0,0,200,28ZM72,36H184a19.86,19.86,0,0,0-4,12V188H60V48A12,12,0,0,1,72,36ZM176,220H64a4,4,0,0,1-4-4V196H180v20A4,4,0,0,1,176,220Z"/></svg>`;
}
