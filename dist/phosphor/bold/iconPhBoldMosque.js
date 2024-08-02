export const iconPhBoldMosque = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,124a32,32,0,0,0-8.06,1c-1.29-41.54-29.35-62.32-50-77.58C150.18,38.73,140,31.21,140,24a12,12,0,0,0-24,0c0,7.21-10.18,14.73-22,23.45-20.63,15.26-48.69,36-50,77.58A32,32,0,0,0,4,156v52a12,12,0,0,0,12,12H240a12,12,0,0,0,12-12V156A32,32,0,0,0,220,124ZM44,196H28V156a8,8,0,0,1,16,0ZM108.31,66.74c7-5.14,14-10.36,19.69-16.27,5.68,5.91,12.74,11.13,19.69,16.27C164.8,79.4,182.4,92.44,186.9,116H69.1C73.6,92.44,91.2,79.4,108.31,66.74ZM188,196H164V168a12,12,0,0,0-24,0v28H116V168a12,12,0,0,0-24,0v28H68V140H188Zm40,0H212V156a8,8,0,0,1,16,0Z"/></svg>`;
}
