export const iconPhBoldStackOverflowLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,151.67V216A12,12,0,0,1,208,228H48A12,12,0,0,1,36,216V151.67a12,12,0,1,1,24,0V203.9H196V151.67a12,12,0,1,1,24,0ZM88,183.81h80a12.06,12.06,0,0,0,0-24.11H88a12.06,12.06,0,0,0,0,24.11ZM96.2,113l75.17,27.49a12.05,12.05,0,0,0,8.21-22.66L104.41,90.35A12,12,0,0,0,96.2,113ZM128,49.29l61.29,51.64a12,12,0,0,0,16.9-1.48,12.09,12.09,0,0,0-1.48-17L143.44,30.82a12,12,0,0,0-16.91,1.49A12.1,12.1,0,0,0,128,49.29Z"/></svg>`;
}
