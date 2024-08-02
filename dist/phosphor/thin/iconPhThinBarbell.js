export const iconPhThinBarbell = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,124H236V88a12,12,0,0,0-12-12H204V64a12,12,0,0,0-12-12H168a12,12,0,0,0-12,12v60H100V64A12,12,0,0,0,88,52H64A12,12,0,0,0,52,64V76H32A12,12,0,0,0,20,88v36H8a4,4,0,0,0,0,8H20v36a12,12,0,0,0,12,12H52v12a12,12,0,0,0,12,12H88a12,12,0,0,0,12-12V132h56v60a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V180h20a12,12,0,0,0,12-12V132h12a4,4,0,0,0,0-8ZM32,172a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H52v88Zm60,20a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H88a4,4,0,0,1,4,4Zm104,0a4,4,0,0,1-4,4H168a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4Zm32-24a4,4,0,0,1-4,4H204V84h20a4,4,0,0,1,4,4Z"/></svg>`;
}
