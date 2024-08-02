export const iconPhBoldFramerLogoBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,104V40a12,12,0,0,0-12-12H56a12,12,0,0,0-8,21L96.44,92H56a12,12,0,0,0-12,12v64a12,12,0,0,0,3.52,8.49l72,72A12,12,0,0,0,140,240V180h60a12,12,0,0,0,8-21l-48.41-43H200A12,12,0,0,0,212,104Zm-43.56,52H128a12,12,0,0,0-12,12v43L68,163V116h55.44ZM188,92H132.56l-45-40H188Z"/></svg>`;
}
