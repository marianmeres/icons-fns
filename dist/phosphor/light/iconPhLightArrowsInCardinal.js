export const iconPhLightArrowsInCardinal = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M91.76,68.24a6,6,0,0,1,8.48-8.48L122,81.51V24a6,6,0,0,1,12,0V81.51l21.76-21.75a6,6,0,0,1,8.48,8.48l-32,32a6,6,0,0,1-8.48,0Zm40.48,87.52a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L122,174.49V232a6,6,0,0,0,12,0V174.49l21.76,21.75a6,6,0,0,0,8.48-8.48ZM232,122H174.49l21.75-21.76a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.48-8.48L174.49,134H232a6,6,0,0,0,0-12Zm-131.76,1.76-32-32a6,6,0,0,0-8.48,8.48L81.51,122H24a6,6,0,0,0,0,12H81.51L59.76,155.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,100.24,123.76Z"/></svg>`;
}
