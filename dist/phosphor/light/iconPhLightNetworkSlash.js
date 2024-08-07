export const iconPhLightNetworkSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M98,54V40a14,14,0,0,1,14-14h32a14,14,0,0,1,14,14V72a14,14,0,0,1-14,14H127.61a6,6,0,0,1,0-12H144a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H112a2,2,0,0,0-2,2V54a6,6,0,0,1-12,0ZM212.44,212a6,6,0,0,1-8.88,8.08l-85.49-94H70v36H80a14,14,0,0,1,14,14v32a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V176a14,14,0,0,1,14-14H58V126H24a6,6,0,0,1,0-12h83.16L43.56,44A6,6,0,0,1,52.44,36ZM80,174H48a2,2,0,0,0-2,2v32a2,2,0,0,0,2,2H80a2,2,0,0,0,2-2V176A2,2,0,0,0,80,174Zm152-60H164a6,6,0,0,0,0,12h22v24.83a6,6,0,1,0,12,0V126h34a6,6,0,0,0,0-12Z"/></svg>`;
}
