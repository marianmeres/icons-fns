export const iconPhLightRepeatLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M26,128A70.08,70.08,0,0,1,96,58H209.51L195.76,44.24a6,6,0,0,1,8.48-8.48l24,24a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48-8.48L209.51,70H96a58.07,58.07,0,0,0-58,58,6,6,0,0,1-12,0Zm198-6a6,6,0,0,0-6,6,58.07,58.07,0,0,1-58,58H46.49l13.75-13.76a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,0,0,8.48-8.48L46.49,198H160a70.08,70.08,0,0,0,70-70A6,6,0,0,0,224,122Z"/></svg>`;
}
