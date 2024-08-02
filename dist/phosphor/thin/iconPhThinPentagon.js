export const iconPhThinPentagon = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M223.14,90.74,135.19,22.4l-.09-.07a12,12,0,0,0-14.19,0l-.09.07L32.87,90.74A12,12,0,0,0,28.57,104l32,107.7A12,12,0,0,0,72,220H184a12,12,0,0,0,11.44-8.41l32-107.53A12,12,0,0,0,223.14,90.74Zm-3.36,11-32,107.54A4,4,0,0,1,184,212H72a4,4,0,0,1-3.79-2.69l-32-107.7a4,4,0,0,1,1.44-4.45l.09-.07,87.94-68.33a4,4,0,0,1,4.65,0l87.94,68.33.09.07A4,4,0,0,1,219.78,101.69Z"/></svg>`;
}
