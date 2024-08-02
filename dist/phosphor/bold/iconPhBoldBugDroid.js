export const iconPhBoldBugDroid = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M197.35,51.62l11.14-11.13a12,12,0,1,0-17-17L179.34,35.69a91.84,91.84,0,0,0-102.68,0L64.49,23.51a12,12,0,0,0-17,17L58.65,51.62A91.58,91.58,0,0,0,36,112v40a92,92,0,0,0,184,0V112A91.58,91.58,0,0,0,197.35,51.62ZM196,112v4H60v-4a68,68,0,0,1,136,0ZM128,220a68.07,68.07,0,0,1-68-68V140H196v12A68.07,68.07,0,0,1,128,220ZM140,88a16,16,0,1,1,16,16A16,16,0,0,1,140,88ZM84,88a16,16,0,1,1,16,16A16,16,0,0,1,84,88Z"/></svg>`;
}
