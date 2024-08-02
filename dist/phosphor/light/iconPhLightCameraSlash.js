export const iconPhLightCameraSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36A6,6,0,0,0,43.56,44L56.25,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H198.07l5.49,6a6,6,0,0,0,8.88-8.08Zm53.06,76.2,40.11,44.13A29.67,29.67,0,0,1,128,162a30,30,0,0,1-22.5-49.84ZM48,202a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H67.16l30.23,33.25a42,42,0,0,0,56.33,62L187.16,202ZM230,80V186a6,6,0,0,1-12,0V80a10,10,0,0,0-10-10H176a6,6,0,0,1-5-2.67L156.78,46H99.21l-.23.34a6,6,0,0,1-10-6.65l2-3A6,6,0,0,1,96,34h64a6,6,0,0,1,5,2.67L179.21,58H208A22,22,0,0,1,230,80Z"/></svg>`;
}
