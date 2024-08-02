export const iconPhBoldHeadlightsBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164,80a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H176A12,12,0,0,1,164,80Zm76,84H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm0-48H176a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24ZM148,64V192a20,20,0,0,1-20,20H88A84,84,0,0,1,4,127.37C4.34,81.4,42.43,44,88.9,44H128A20,20,0,0,1,148,64Zm-24,4H88.9C55.57,68,28.25,94.71,28,127.54A60,60,0,0,0,88,188h36Z"/></svg>`;
}
