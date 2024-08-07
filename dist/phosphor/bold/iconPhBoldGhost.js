export const iconPhBoldGhost = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M116,116a16,16,0,1,1-16-16A16,16,0,0,1,116,116Zm40-16a16,16,0,1,0,16,16A16,16,0,0,0,156,100Zm72,20v96a12,12,0,0,1-19.6,9.29L186.67,207.5l-21.74,17.79a12,12,0,0,1-15.2,0L128,207.5l-21.73,17.79a12,12,0,0,1-15.2,0L69.33,207.5,47.6,225.29A12,12,0,0,1,28,216V120a100,100,0,0,1,200,0Zm-24,0a76,76,0,0,0-152,0v70.68l9.73-8a12,12,0,0,1,15.2,0L98.67,200.5l21.73-17.79a12,12,0,0,1,15.2,0l21.73,17.79,21.74-17.79a12,12,0,0,1,15.2,0l9.73,8Z"/></svg>`;
}
