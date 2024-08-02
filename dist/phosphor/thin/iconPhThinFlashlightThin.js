export const iconPhThinFlashlightThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M184,20H72A12,12,0,0,0,60,32V77.33a12.05,12.05,0,0,0,2.4,7.2l20.8,27.74a4,4,0,0,1,.8,2.4V224a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V114.67a4,4,0,0,1,.8-2.4l20.8-27.74a12.05,12.05,0,0,0,2.4-7.2V32A12,12,0,0,0,184,20ZM72,28H184a4,4,0,0,1,4,4V60H68V32A4,4,0,0,1,72,28ZM187.2,79.73l-20.8,27.74a12.05,12.05,0,0,0-2.4,7.2V224a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4V114.67a12.05,12.05,0,0,0-2.4-7.2L68.8,79.73a4,4,0,0,1-.8-2.4V68H188v9.33A4,4,0,0,1,187.2,79.73ZM132,120v32a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Z"/></svg>`;
}
