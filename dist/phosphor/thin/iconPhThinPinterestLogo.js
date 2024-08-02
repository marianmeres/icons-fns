export const iconPhThinPinterestLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,112c0,21.53-7.5,41.18-21.12,55.34C186.26,180.47,169.17,188,152,188c-21.35,0-33.52-8.76-39.76-15.57L99.89,224.92A4,4,0,0,1,96,228a4.2,4.2,0,0,1-.92-.11,4,4,0,0,1-3-4.81l32-136a4,4,0,0,1,7.78,1.84l-17.28,73.45C117,166.42,127,180,152,180c29.49,0,60-25.44,60-68A76,76,0,1,0,70.17,150a4,4,0,0,1-6.93,4A84,84,0,1,1,220,112Z"/></svg>`;
}
