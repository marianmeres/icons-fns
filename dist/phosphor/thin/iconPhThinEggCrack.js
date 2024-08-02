export const iconPhThinEggCrack = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20C92.87,20,44,86.52,44,152a84,84,0,0,0,168,0C212,86.52,163.13,20,128,20Zm0,208a76.08,76.08,0,0,1-76-76c0-28.46,10-59.73,27.33-85.78C94.81,43,113.91,28,128,28c11.39,0,26.05,9.8,39.42,25.82L125,101.34a4,4,0,0,0,2,6.54l28.3,7.08-7.25,36.26a4,4,0,0,0,3.14,4.7,3.44,3.44,0,0,0,.78.08,4,4,0,0,0,3.92-3.22l8-40a4,4,0,0,0-2.95-4.66l-25.58-6.4L172.44,60.2q2.16,2.91,4.23,6C194,92.27,204,123.54,204,152A76.08,76.08,0,0,1,128,228Z"/></svg>`;
}
