export const iconPhBoldOnigiri = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235,144.51,179.13,48.65a2.75,2.75,0,0,0-.17-.29A60,60,0,0,0,77,48.36a2.75,2.75,0,0,0-.17.29L21,144.51A60,60,0,0,0,72.1,236H183.9A60,60,0,0,0,235,144.51ZM156,212H100V172h56Zm59.36-18.5A35.55,35.55,0,0,1,183.9,212H180V168a20,20,0,0,0-20-20H96a20,20,0,0,0-20,20v44H72.1a36,36,0,0,1-30.58-55l.17-.28L97.51,60.88a36,36,0,0,1,61,0l55.82,95.85.17.28A35.58,35.58,0,0,1,215.35,193.5Z"/></svg>`;
}
