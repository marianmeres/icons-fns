export const iconPhBoldTildeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.35,133.1c-15.22,18.93-30.43,29-46.5,30.65A46.71,46.71,0,0,1,174,164c-20.81,0-38.16-14.13-53.59-26.7-14.24-11.6-27.68-22.54-40.75-21.18-9.26,1-19.46,8.32-30.32,21.82a12,12,0,0,1-18.7-15C45.87,104,61.08,94,77.15,92.25c23-2.42,41.82,12.92,58.43,26.45,14.24,11.6,27.68,22.54,40.75,21.18,9.26-1,19.46-8.32,30.32-21.82a12,12,0,1,1,18.7,15Z"/></svg>`;
}
