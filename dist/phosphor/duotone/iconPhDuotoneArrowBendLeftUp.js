export const iconPhDuotoneArrowBendLeftUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152,80H56l48-48Z" opacity="0.2"/><path d="M200,216a88.1,88.1,0,0,1-88-88V88h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,56,88H96v40A104.11,104.11,0,0,0,200,232a8,8,0,0,0,0-16ZM104,43.31,132.69,72H75.31Z"/></svg>`;
}
