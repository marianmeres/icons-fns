export const iconPhBoldParkBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,188H204V172h20a12,12,0,0,0,11.64-14.91l-32-128a12,12,0,0,0-23.28,0l-32,128A12,12,0,0,0,160,172h20v16H116V176a12,12,0,0,0,0-24V140a12,12,0,0,0,0-24H32a12,12,0,0,0,0,24v12a12,12,0,0,0,0,24v12H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM192,81.48,208.63,148H175.37ZM56,140H92v12H56Zm0,36H92v12H56Zm60-76A32,32,0,1,0,84,68,32,32,0,0,0,116,100Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,116,60Z"/></svg>`;
}
