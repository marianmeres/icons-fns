export const iconPhThinGhost = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M108,116a8,8,0,1,1-8-8A8,8,0,0,1,108,116Zm48-8a8,8,0,1,0,8,8A8,8,0,0,0,156,108Zm64,12v96a4,4,0,0,1-6.53,3.1l-26.8-21.93-26.8,21.93a4,4,0,0,1-5.07,0L128,197.17,101.2,219.1a4,4,0,0,1-5.07,0l-26.8-21.93L42.53,219.1A4,4,0,0,1,36,216V120a92,92,0,0,1,184,0Zm-8,0a84,84,0,0,0-168,0v87.56L66.8,188.9a4,4,0,0,1,5.07,0l26.8,21.93,26.8-21.93a4,4,0,0,1,5.06,0l26.8,21.93,26.8-21.93a4,4,0,0,1,5.07,0L212,207.56Z"/></svg>`;
}
