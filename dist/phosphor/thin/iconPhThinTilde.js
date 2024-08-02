export const iconPhThinTilde = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M219.12,128.09c-13.82,17.18-27.26,26.24-41.11,27.7a38.9,38.9,0,0,1-4,.21c-18,0-33.48-12.64-48.53-24.9-15.57-12.68-30.29-24.66-46.64-22.93-11.62,1.22-23.3,9.32-35.71,24.76a4,4,0,0,1-6.24-5C50.7,110.73,64.14,101.67,78,100.21c19.67-2.08,36.38,11.53,52.54,24.69,15.57,12.68,30.29,24.66,46.64,22.93,11.62-1.22,23.3-9.32,35.71-24.76a4,4,0,1,1,6.24,5Z"/></svg>`;
}
