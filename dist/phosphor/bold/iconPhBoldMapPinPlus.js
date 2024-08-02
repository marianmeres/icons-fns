export const iconPhBoldMapPinPlus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,104a12,12,0,0,1-12,12H140v20a12,12,0,0,1-24,0V116H96a12,12,0,0,1,0-24h20V72a12,12,0,0,1,24,0V92h20A12,12,0,0,1,172,104Zm48,0c0,32.38-14.85,66.57-42.94,98.87a259,259,0,0,1-42.18,39,12,12,0,0,1-13.76,0C117.64,239.4,36,181.36,36,104a92,92,0,0,1,184,0Zm-24,0a68,68,0,0,0-136,0c0,33.31,20,63.37,36.7,82.71A249.35,249.35,0,0,0,128,216.89a249.35,249.35,0,0,0,31.3-30.18C176,167.37,196,137.31,196,104Z"/></svg>`;
}
