export const iconPhThinPasswordThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M44,56V200a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0Zm97.2,58.31L116,122.49V96a4,4,0,0,0-8,0v26.49l-25.2-8.18a4,4,0,0,0-2.47,7.61l25.2,8.18L90,151.54a4,4,0,1,0,6.47,4.7L112,134.81l15.57,21.43a4,4,0,0,0,3.24,1.65,4,4,0,0,0,3.23-6.35L118.47,130.1l25.2-8.18a4,4,0,0,0-2.47-7.61Zm101,2.57a4,4,0,0,0-5-2.57L212,122.49V96a4,4,0,0,0-8,0v26.49l-25.2-8.18a4,4,0,0,0-2.47,7.61l25.2,8.18L186,151.54a4,4,0,1,0,6.47,4.7L208,134.81l15.57,21.43a4,4,0,0,0,3.24,1.65,4,4,0,0,0,3.23-6.35L214.47,130.1l25.2-8.18A4,4,0,0,0,242.24,116.88Z"/></svg>`;
}
