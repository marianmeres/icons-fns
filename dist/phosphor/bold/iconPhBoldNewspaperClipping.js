export const iconPhBoldNewspaperClipping = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,36H40A20,20,0,0,0,20,56V216a12,12,0,0,0,17.37,10.73L64,213.42l26.63,13.31a12,12,0,0,0,10.74,0L128,213.42l26.63,13.31a12,12,0,0,0,10.74,0L192,213.42l26.63,13.31A12,12,0,0,0,236,216V56A20,20,0,0,0,216,36Zm-4,160.58-14.63-7.31a12,12,0,0,0-10.74,0L160,202.58l-26.63-13.31a12,12,0,0,0-10.74,0L96,202.58,69.37,189.27a12,12,0,0,0-10.74,0L44,196.58V60H212ZM136,108a12,12,0,0,1,12-12h36a12,12,0,0,1,0,24H148A12,12,0,0,1,136,108Zm0,40a12,12,0,0,1,12-12h36a12,12,0,0,1,0,24H148A12,12,0,0,1,136,148ZM72,172h40a12,12,0,0,0,12-12V96a12,12,0,0,0-12-12H72A12,12,0,0,0,60,96v64A12,12,0,0,0,72,172Zm12-64h16v40H84Z"/></svg>`;
}
