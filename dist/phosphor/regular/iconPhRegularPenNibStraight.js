export const iconPhRegularPenNibStraight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.9V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.92L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,86.44,112.28a8,8,0,0,0,12.67,0L220.77,140.6l.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,32V64H80V32ZM128,144a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm8,80.5V158.83a28,28,0,1,0-16,0v65.66L48,131,76.69,80H179.32L208,131Z"/></svg>`;
}
