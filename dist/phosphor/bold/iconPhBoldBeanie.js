export const iconPhBoldBeanie = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,160V144a100.17,100.17,0,0,0-70.52-95.56,32,32,0,1,0-59,0A100.17,100.17,0,0,0,28,144v16a20,20,0,0,0-8,16v32a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V176A20,20,0,0,0,228,160ZM120,36a8,8,0,1,1,8,8A8,8,0,0,1,120,36Zm8,32a76.08,76.08,0,0,1,76,76v12H52V144A76.08,76.08,0,0,1,128,68ZM116,180v24H84V180Zm24,0h32v24H140Zm-96,0H60v24H44Zm168,24H196V180h16Z"/></svg>`;
}
