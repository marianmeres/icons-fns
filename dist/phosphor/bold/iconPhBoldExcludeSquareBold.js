export const iconPhBoldExcludeSquareBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M228,160V96a12,12,0,0,0-12-12H172V40a12,12,0,0,0-12-12H40A12,12,0,0,0,28,40V96h0v64a12,12,0,0,0,12,12H84v44a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V160Zm-63,44-32-32H155l32,32ZM52,69l32,32V123L52,91ZM91,52l32,32H101L69,52Zm17,96V108h40v40Zm64,7V133l32,32V187Zm32-24-23-23h23ZM148,75,125,52h23ZM52,125l23,23H52Zm56,56,23,23H108Z"/></svg>`;
}
