export const iconPhThinBeltThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,164H188V92h60a4,4,0,0,0,0-8H187.3A12,12,0,0,0,176,76H112a12,12,0,0,0-11.3,8H60V80a4,4,0,0,0-8,0v4H8a4,4,0,0,0,0,8H52v72H8a4,4,0,0,0,0,8H52v4a4,4,0,0,0,8,0v-4h40.7a12,12,0,0,0,11.3,8h64a12,12,0,0,0,11.3-8H248a4,4,0,0,0,0-8ZM60,92h40v72H60Zm116,80H112a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v36H144a4,4,0,0,0,0,8h36v36A4,4,0,0,1,176,172Z"/></svg>`;
}
