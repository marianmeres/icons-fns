export const iconPhBoldPushPinSimpleSlashBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07L62,73.19,45.93,164H40a12,12,0,0,0,0,24h76v52a12,12,0,0,0,24,0V188h26.33l32.79,36.07a12,12,0,0,0,17.76-16.14ZM70.3,164,82.37,95.64,144.51,164ZM90.06,40a12,12,0,0,1,12-12H192a12,12,0,0,1,0,24h-1.7l15.33,86.84a12,12,0,0,1-9.73,13.91,12.59,12.59,0,0,1-2.1.18A12,12,0,0,1,182,143L165.93,52H102.06A12,12,0,0,1,90.06,40Z"/></svg>`;
}
