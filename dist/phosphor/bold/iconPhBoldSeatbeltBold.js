export const iconPhBoldSeatbeltBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,212H89.45l110.18-90.74a12,12,0,1,0-15.26-18.52l-17.78,14.64a83.34,83.34,0,0,0-17-6.55,48,48,0,1,0-43.26,0,83.9,83.9,0,0,0-58,54.49,12,12,0,0,0,22.76,7.62,60.05,60.05,0,0,1,74.54-38.3l-97.26,80.1A12,12,0,0,0,56,236H200a12,12,0,0,0,0-24ZM128,44a24,24,0,1,1-24,24A24,24,0,0,1,128,44Zm76.61,113.51a83.58,83.58,0,0,1,6.88,25.17,12,12,0,0,1-23.86,2.64,59.16,59.16,0,0,0-4.9-17.95,12,12,0,0,1,21.88-9.86Z"/></svg>`;
}
