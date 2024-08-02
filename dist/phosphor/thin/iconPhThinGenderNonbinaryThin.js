export const iconPhThinGenderNonbinaryThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,100.13V55.07l33.94,20.36a4,4,0,1,0,4.12-6.86L135.77,48l34.29-20.57a4,4,0,1,0-4.12-6.86L128,43.34,90.06,20.57a4,4,0,1,0-4.12,6.86L120.23,48,85.94,68.57a4,4,0,0,0,4.12,6.86L124,55.07v45.06a68,68,0,1,0,8,0ZM128,228a60,60,0,1,1,60-60A60.07,60.07,0,0,1,128,228Z"/></svg>`;
}
