export const iconPhLightChatTeardropSlashLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36A6,6,0,0,0,43.56,44l14.37,15.8A97.42,97.42,0,0,0,34,124v84a14,14,0,0,0,14,14h84a98.24,98.24,0,0,0,56.82-18.18L203.56,220a6,6,0,0,0,8.88-8.08ZM132,210H48a2,2,0,0,1-2-2V124A85.46,85.46,0,0,1,66.08,68.8L180.7,194.88A84.91,84.91,0,0,1,132,210Zm98-86a97.86,97.86,0,0,1-14.06,50.61,6,6,0,0,1-5.15,2.9,6,6,0,0,1-5.12-9.1,86,86,0,0,0-110.88-122,6,6,0,1,1-5.2-10.81A97.09,97.09,0,0,1,132,26,98.11,98.11,0,0,1,230,124Z"/></svg>`;
}
