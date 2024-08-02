export const iconPhLightAndroidLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M174,148a10,10,0,1,1-10-10A10,10,0,0,1,174,148ZM92,138a10,10,0,1,0,10,10A10,10,0,0,0,92,138Zm146,22v24a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V161.13A111.44,111.44,0,0,1,54.28,78.76L27.76,52.24a6,6,0,1,1,8.48-8.48L63.61,71.12a108.59,108.59,0,0,1,64-21.12H128a109.17,109.17,0,0,1,64.58,20.93l27.18-27.17a6,6,0,0,1,8.48,8.48L201.93,78.55c1.26,1.15,2.5,2.32,3.72,3.53A109.29,109.29,0,0,1,238,160Zm-12,0a98,98,0,0,0-98-98h-.35C73.81,62.19,30,106.66,30,161.13V184a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z"/></svg>`;
}
