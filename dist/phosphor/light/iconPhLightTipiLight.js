export const iconPhLightTipiLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.05,212.77,135.12,53.5l21.93-34.26A6,6,0,1,0,147,12.77L128,42.37l-19-29.6A6,6,0,1,0,99,19.24L120.88,53.5,19,212.77A6,6,0,0,0,24,222H232a6,6,0,0,0,5.05-9.23ZM82.64,210,128,139.13,173.36,210Zm105,0-54.55-85.23a6,6,0,0,0-10.1,0L68.4,210H35L128,64.63,221,210Z"/></svg>`;
}
