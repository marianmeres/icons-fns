export const iconPhThinTextHFour = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M148,56V176a4,4,0,0,1-8,0V120H44v56a4,4,0,0,1-8,0V56a4,4,0,0,1,8,0v56h96V56a4,4,0,0,1,8,0ZM252,184a4,4,0,0,1-4,4H236v20a4,4,0,0,1-8,0V188H176a4,4,0,0,1-3.16-6.46l56-72A4,4,0,0,1,236,112v68h12A4,4,0,0,1,252,184Zm-24-60.34L184.18,180H228Z"/></svg>`;
}
