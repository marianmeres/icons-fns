export const iconPhBoldClockClockwiseBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,80v41.21l34.17,20.5a12,12,0,1,1-12.34,20.58l-40-24A12,12,0,0,1,116,128V80a12,12,0,0,1,24,0Zm84-28a12,12,0,0,0-12,12v7.37c-4.21-4.67-8.58-9.31-13.29-14.08a100,100,0,1,0-2.07,143.44,12,12,0,0,0-16.48-17.46,76,76,0,1,1,1.53-109.06C187.61,80.2,193,86,198.23,92H184a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Z"/></svg>`;
}
