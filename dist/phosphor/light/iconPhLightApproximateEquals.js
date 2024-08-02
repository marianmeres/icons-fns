export const iconPhLightApproximateEquals = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220.62,154.57a6,6,0,0,1-.79,8.45c-16.87,14-32,19-45.75,19-18.19,0-34.13-8.66-48.94-16.71-26-14.12-48.44-26.31-81.31,1A6,6,0,1,1,36.17,157c39.13-32.46,68.65-16.42,94.69-2.27s48.44,26.31,81.31-1A6,6,0,0,1,220.62,154.57ZM43.83,102.22c32.87-27.27,55.32-15.08,81.31-1,14.81,8,30.75,16.71,48.94,16.71,13.79,0,28.88-5,45.75-19a6,6,0,0,0-7.66-9.24c-32.87,27.27-55.32,15.08-81.31,1S75.3,60.52,36.17,93a6,6,0,0,0,7.66,9.24Z"/></svg>`;
}
