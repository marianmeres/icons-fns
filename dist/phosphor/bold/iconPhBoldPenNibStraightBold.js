export const iconPhBoldPenNibStraightBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.92,122.11c-.1-.19-.19-.37-.3-.56L196,68.85V32a20,20,0,0,0-20-20H80A20,20,0,0,0,60,32V68.87L30.38,121.55a5.12,5.12,0,0,0-.3.57,19.89,19.89,0,0,0,1.83,20.71c.09.13.18.25.28.37l86.44,108.29a12,12,0,0,0,18.75,0L223.81,143.2c.1-.12.19-.24.28-.37A19.91,19.91,0,0,0,225.92,122.11ZM172,36V60H84V36ZM128,144a10,10,0,1,1,10-10A10,10,0,0,1,128,144Zm12,65.74V165.81a34,34,0,1,0-24,0v43.92L52.83,130.59,79,84H177l26.19,46.59Z"/></svg>`;
}
