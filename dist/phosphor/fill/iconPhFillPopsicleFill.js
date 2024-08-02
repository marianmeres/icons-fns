export const iconPhFillPopsicleFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8ZM112,152a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm24,80a8,8,0,0,1-16,0V192h16Zm24-80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"/></svg>`;
}
