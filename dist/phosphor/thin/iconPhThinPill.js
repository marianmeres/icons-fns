export const iconPhThinPill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M186.84,85.17a4,4,0,0,1,0,5.66l-24,24a4,4,0,1,1-5.66-5.66l24-24A4,4,0,0,1,186.84,85.17Zm26.75,26.91L112.08,213.57a49.26,49.26,0,0,1-69.67-69.65L143.92,42.43a49.26,49.26,0,0,1,69.67,69.65ZM154.35,160,96,101.66,48.06,149.57a41.26,41.26,0,0,0,58.36,58.35ZM207.94,48.08a41.28,41.28,0,0,0-58.36,0L101.65,96,160,154.34l47.93-47.91A41.32,41.32,0,0,0,207.94,48.08Z"/></svg>`;
}
