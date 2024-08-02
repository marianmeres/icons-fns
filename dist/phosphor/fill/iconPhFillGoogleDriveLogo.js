export const iconPhFillGoogleDriveLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.6,143.78,169.13,31.52A15.91,15.91,0,0,0,155.56,24H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,143.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,216H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,143.78ZM219,144H172.52L137.33,85.33l22.75-37.92ZM92.53,160h70.94l24,40H68.53Zm9.6-16L128,100.88,153.87,144ZM95.91,47.41l22.76,37.92L83.47,144H37Z"/></svg>`;
}
