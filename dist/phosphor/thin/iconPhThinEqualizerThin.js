export const iconPhThinEqualizerThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M76,96a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H72A4,4,0,0,1,76,96Zm-4,28H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm0,32H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm0,32H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm80-64H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm80-96H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8ZM184,68h48a4,4,0,0,0,0-8H184a4,4,0,0,0,0,8Zm48,56H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Z"/></svg>`;
}
