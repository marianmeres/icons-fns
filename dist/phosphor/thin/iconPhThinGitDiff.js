export const iconPhThinGitDiff = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M112,156a4,4,0,0,0-4,4v38.34L63.51,153.86A12,12,0,0,1,60,145.37V91.71a28,28,0,1,0-8,0v53.66a19.85,19.85,0,0,0,5.86,14.14L102.34,204H64a4,4,0,0,0,0,8h48a4,4,0,0,0,4-4V160A4,4,0,0,0,112,156ZM36,64A20,20,0,1,1,56,84,20,20,0,0,1,36,64ZM204,164.29V110.63a19.85,19.85,0,0,0-5.86-14.14L153.66,52H192a4,4,0,0,0,0-8H144a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l44.49,44.48a12,12,0,0,1,3.51,8.49v53.66a28,28,0,1,0,8,0ZM200,212a20,20,0,1,1,20-20A20,20,0,0,1,200,212Z"/></svg>`;
}
