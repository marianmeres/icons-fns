export const iconPhLightKnife = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M230.46,33.55a25.81,25.81,0,0,0-36.49,0L19.76,207.82a6,6,0,0,0,2.89,10.09A158.88,158.88,0,0,0,58.39,222c32.57,0,65.17-10.1,95.87-29.91,31.49-20.32,49.72-43.39,50.48-44.36a6,6,0,0,0-.49-7.94L182.49,118l48-48A25.86,25.86,0,0,0,230.46,33.55Zm-38.6,110.82A221,221,0,0,1,147.75,182C111.5,205.4,74,214.23,36.23,208.32L146,98.5ZM222,61.56l-48,48L154.49,90l48-48A13.81,13.81,0,0,1,222,61.56Z"/></svg>`;
}
