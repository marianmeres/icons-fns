export const iconPhThinUniteSquare = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,92H164V40a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V160a4,4,0,0,0,4,4H92v52a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4V96A4,4,0,0,0,216,92ZM153.66,212,44,102.34V49.66L206.34,212ZM49.66,44h52.68L212,153.66v52.68ZM212,142.34,169.66,100H212Zm-56-56L113.66,44H156ZM44,113.66,86.34,156H44Zm56,56L142.34,212H100Z"/></svg>`;
}
