export const iconPhThinChatCentered = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,44H40A12,12,0,0,0,28,56V184a12,12,0,0,0,12,12h62.75L117.58,222a12,12,0,0,0,20.84,0L153.25,196H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,140a4,4,0,0,1-4,4H150.93a4,4,0,0,0-3.47,2l-16,28a4,4,0,0,1-6.94,0l-16-28a4,4,0,0,0-3.47-2H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z"/></svg>`;
}
