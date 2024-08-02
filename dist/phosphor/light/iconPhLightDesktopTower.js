export const iconPhLightDesktopTower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M214,72a6,6,0,0,1-6,6H176a6,6,0,0,1,0-12h32A6,6,0,0,1,214,72Zm-6,26H176a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm38-50V208a14,14,0,0,1-14,14H152a14,14,0,0,1-14-14V190H94v20h18a6,6,0,0,1,0,12H64a6,6,0,0,1,0-12H82V190H32a22,22,0,0,1-22-22V96A22,22,0,0,1,32,74H138V48a14,14,0,0,1,14-14h80A14,14,0,0,1,246,48ZM138,178V86H32A10,10,0,0,0,22,96v72a10,10,0,0,0,10,10ZM234,48a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2h80a2,2,0,0,0,2-2ZM192,170a10,10,0,1,0,10,10A10,10,0,0,0,192,170Z"/></svg>`;
}
