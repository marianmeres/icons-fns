export const iconPhThinSkipBack = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M197.87,37.52a12,12,0,0,0-12.18.32L60,116.44V40a4,4,0,0,0-8,0V216a4,4,0,0,0,8,0V139.56l125.69,78.6a12,12,0,0,0,12.18.32A11.69,11.69,0,0,0,204,208.12V47.88A11.69,11.69,0,0,0,197.87,37.52ZM196,208.12a3.8,3.8,0,0,1-2,3.37,4,4,0,0,1-4.06-.11L61.82,131.26a3.83,3.83,0,0,1,0-6.52L189.94,44.62a4,4,0,0,1,2.11-.62,4,4,0,0,1,1.95.51,3.8,3.8,0,0,1,2,3.37Z"/></svg>`;
}
