export const iconPhBoldClub = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M186.79,84.06a60,60,0,1,0-117.58,0,60,60,0,1,0,19,117.73l-4,19.86A12,12,0,0,0,96,236h64a12,12,0,0,0,11.77-14.35l-4-19.86a60,60,0,1,0,19-117.73ZM184,180a35.88,35.88,0,0,1-24.78-9.88,12,12,0,0,0-20,11.06L145.36,212H110.64l6.16-30.82a12,12,0,0,0-20-11.06,36,36,0,1,1-12.65-60,12,12,0,0,0,14-18A35.68,35.68,0,0,1,92,72a36,36,0,1,1,65.88,20.08,12,12,0,0,0,14,18A36,36,0,1,1,184,180Z"/></svg>`;
}
