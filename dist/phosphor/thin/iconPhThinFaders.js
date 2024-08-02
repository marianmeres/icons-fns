export const iconPhThinFaders = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,120v96a4,4,0,0,1-8,0V120a4,4,0,0,1,8,0Zm68,76a4,4,0,0,0-4,4v16a4,4,0,0,0,8,0V200A4,4,0,0,0,200,196Zm24-32H204V40a4,4,0,0,0-8,0V164H176a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8ZM56,164a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V168A4,4,0,0,0,56,164Zm24-32H60V40a4,4,0,0,0-8,0v92H32a4,4,0,0,0,0,8H80a4,4,0,0,0,0-8Zm72-48H132V40a4,4,0,0,0-8,0V84H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Z"/></svg>`;
}
