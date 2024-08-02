export const iconPhThinSelectionAll = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M108,40a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,40Zm36,172H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM208,36H184a4,4,0,0,0,0,8h24a4,4,0,0,1,4,4V72a4,4,0,0,0,8,0V48A12,12,0,0,0,208,36Zm8,72a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,216,108Zm0,72a4,4,0,0,0-4,4v24a4,4,0,0,1-4,4H184a4,4,0,0,0,0,8h24a12,12,0,0,0,12-12V184A4,4,0,0,0,216,180ZM40,148a4,4,0,0,0,4-4V112a4,4,0,0,0-8,0v32A4,4,0,0,0,40,148Zm32,64H48a4,4,0,0,1-4-4V184a4,4,0,0,0-8,0v24a12,12,0,0,0,12,12H72a4,4,0,0,0,0-8ZM40,76a4,4,0,0,0,4-4V48a4,4,0,0,1,4-4H72a4,4,0,0,0,0-8H48A12,12,0,0,0,36,48V72A4,4,0,0,0,40,76ZM180,176a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4h96a4,4,0,0,1,4,4Zm-8-92H84v88h88Z"/></svg>`;
}
