export const iconBsSpeakerFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/><path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"/></svg>`;
}
