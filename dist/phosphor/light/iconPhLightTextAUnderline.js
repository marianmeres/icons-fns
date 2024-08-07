export const iconPhLightTextAUnderline = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M61.45,173.43a6,6,0,0,0,8-2.88L86.63,134h82.74l17.2,36.55A6,6,0,0,0,192,174a5.92,5.92,0,0,0,2.55-.57,6,6,0,0,0,2.88-8l-64-136a6,6,0,0,0-10.86,0l-64,136A6,6,0,0,0,61.45,173.43ZM128,46.09,163.72,122H92.28ZM222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Z"/></svg>`;
}
