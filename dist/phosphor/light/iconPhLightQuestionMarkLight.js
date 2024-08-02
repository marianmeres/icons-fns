export const iconPhLightQuestionMarkLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M190,96c0,28-24.62,51.11-56,53.75V160a6,6,0,0,1-12,0V144a6,6,0,0,1,6-6c27.57,0,50-18.84,50-42s-22.43-42-50-42S78,72.84,78,96a6,6,0,0,1-12,0c0-29.78,27.81-54,62-54S190,66.22,190,96Zm-62,98a14,14,0,1,0,14,14A14,14,0,0,0,128,194Z"/></svg>`;
}
