export const iconPhFillWaveformSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,96a8,8,0,0,1,16,0v50.75a8,8,0,0,1-16,0Zm-32,8a8,8,0,0,1,16,0v10.75a8,8,0,0,1-16,0ZM72,152a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm125.66,45.66a8,8,0,0,1-11.32,0L136,147.31V168a8,8,0,0,1-16,0V131.31l-16-16V184a8,8,0,0,1-16,0V99.5c0-.06,0-.12,0-.18L58.34,69.66A8,8,0,0,1,69.66,58.34l128,128A8,8,0,0,1,197.66,197.66Z"/></svg>`;
}
