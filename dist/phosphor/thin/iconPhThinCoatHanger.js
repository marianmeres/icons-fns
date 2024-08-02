export const iconPhThinCoatHanger = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M239.18,174.4,134.67,96l27.72-20.8A4,4,0,0,0,164,72a36,36,0,1,0-72,0,4,4,0,0,0,8,0,28,28,0,0,1,55.92-2l-30.26,22.7-.14.1L16.82,174.4A12,12,0,0,0,24,196H232a12,12,0,0,0,7.2-21.6Zm-3.41,10.87A3.88,3.88,0,0,1,232,188H24a4,4,0,0,1-2.4-7.2L128,101l106.38,79.8A3.88,3.88,0,0,1,235.77,185.27Z"/></svg>`;
}
