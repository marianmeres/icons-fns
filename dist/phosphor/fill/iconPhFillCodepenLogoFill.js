export const iconPhFillCodepenLogoFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7L114.1,217.6a4,4,0,0,0,5.9-3.52v-57.3L66.55,128,32,146.61V109.39L66.55,128l16.88-9.09L40.87,96,120,53.39V99.22L83.43,118.91l44.57,24,44.57-24L189.45,128,224,109.39v37.22L189.45,128,136,156.78v57.3a4,4,0,0,0,5.9,3.52L235.79,167a8,8,0,0,0,4.21-7V96A8,8,0,0,0,235.79,89Zm-63.22,30L136,99.22V53.39L215.13,96Z"/></svg>`;
}
