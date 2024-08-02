export const iconPhThinMemory = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,60H24A12,12,0,0,0,12,72V200a4,4,0,0,0,8,0V180H44v20a4,4,0,0,0,8,0V180H76v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V72A12,12,0,0,0,232,60ZM20,72a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4V172H20Zm92,76a4,4,0,0,0,4-4V96a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4ZM52,100h56v40H52Zm92,48h64a4,4,0,0,0,4-4V96a4,4,0,0,0-4-4H144a4,4,0,0,0-4,4v48A4,4,0,0,0,144,148Zm4-48h56v40H148Z"/></svg>`;
}
