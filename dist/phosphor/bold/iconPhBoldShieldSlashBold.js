export const iconPhBoldShieldSlashBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56.88,31.93A12,12,0,0,0,36,40a20,20,0,0,0-8,16v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1.35-.37,30-8.42,55.86-32.82l12.1,13.31a12,12,0,0,0,17.76-16.14ZM128,219.38a126.38,126.38,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V62.24L170.87,193A126,126,0,0,1,128,219.38ZM228,56v56a144,144,0,0,1-8.23,49.16,12,12,0,0,1-11.28,7.92,11.86,11.86,0,0,1-4.08-.72,12,12,0,0,1-7.2-15.37A120.31,120.31,0,0,0,204,112V60H109.33a12,12,0,1,1,0-24H208A20,20,0,0,1,228,56Z"/></svg>`;
}
