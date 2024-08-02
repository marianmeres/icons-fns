export const iconPhLightEyesLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,34c-21.15,0-39.1,20.15-48,50.26C119.1,54.15,101.15,34,80,34c-30.28,0-54,41.29-54,94s23.72,94,54,94c21.15,0,39.1-20.15,48-50.26,8.9,30.11,26.85,50.26,48,50.26,30.28,0,54-41.29,54-94S206.28,34,176,34ZM80,210c-18.24,0-34.19-24.1-39.83-56.53a30,30,0,1,0,0-50.94C45.81,70.1,61.76,46,80,46c22.77,0,42,37.55,42,82S102.77,210,80,210ZM38,128a18,18,0,1,1,18,18A18,18,0,0,1,38,128Zm138,82c-18.24,0-34.19-24.1-39.83-56.53a30,30,0,1,0,0-50.94C141.81,70.1,157.76,46,176,46c22.77,0,42,37.55,42,82S198.77,210,176,210Zm-42-82a18,18,0,1,1,18,18A18,18,0,0,1,134,128Z"/></svg>`;
}
