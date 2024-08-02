export const iconPhBoldHeartStraightBreak = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M225.84,54.16a62,62,0,0,0-87.6-.08L128,63.94l-10.24-9.86a62,62,0,0,0-87.66,87.7l89.35,90.64a12,12,0,0,0,17.1,0l89.29-90.58a62,62,0,0,0,0-87.68Zm-17,70.77-80.81,82-80.87-82a38,38,0,1,1,53.74-53.74l.16.16,9.67,9.31-7,6.76a12,12,0,0,0-.17,17.13L127,128l-7.52,7.51a12,12,0,1,0,17,17l16-16a12,12,0,0,0,0-17L129.13,96.16,155,71.29l.16-.16a38,38,0,1,1,53.68,53.8Z"/></svg>`;
}
