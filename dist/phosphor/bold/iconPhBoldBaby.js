export const iconPhBoldBaby = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,144a16,16,0,1,1,16-16A16,16,0,0,1,92,144Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,112Zm-14.4,49.85a41,41,0,0,1-43.2,0,12,12,0,1,0-12.8,20.3,65,65,0,0,0,68.8,0,12,12,0,1,0-12.8-20.3ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84.08,84.08,0,0,0-82-83.95c-9.46,14.2-10,27.28-10,28A8,8,0,0,0,136,72a12,12,0,0,1,24,0,32,32,0,0,1-64,0c0-.63.1-10.48,5-23.52A84,84,0,1,0,212,128Z"/></svg>`;
}
