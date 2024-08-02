export const iconPhThinFireSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140.82,20.92a4,4,0,0,0-6.31,1.71l-24.15,66.2L81.81,61.13a4,4,0,0,0-6,.44C54.71,89.25,44,117,44,144a84,84,0,0,0,168,0C212,86.24,162.22,38.69,140.82,20.92ZM128,220a76.08,76.08,0,0,1-76-76c0-24.07,9.25-48.93,27.5-74l29.71,28.83a4,4,0,0,0,6.55-1.5l24.3-66.6C162.27,50.09,204,93.18,204,144A76.08,76.08,0,0,1,128,220Z"/></svg>`;
}
