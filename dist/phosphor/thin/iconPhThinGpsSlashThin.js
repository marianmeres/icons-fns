export const iconPhThinGpsSlashThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,128a4,4,0,0,1-4,4H211.9a83.08,83.08,0,0,1-7.24,30.38,4,4,0,0,1-3.65,2.37,3.94,3.94,0,0,1-1.63-.36,4,4,0,0,1-2-5.28A76.06,76.06,0,0,0,103.62,56a4,4,0,1,1-2.56-7.57A83.56,83.56,0,0,1,124,44.1V16a4,4,0,0,1,8,0V44.1A84.11,84.11,0,0,1,211.9,124H240A4,4,0,0,1,244,128Zm-33,85.31a4,4,0,1,1-5.92,5.38l-23.56-25.91A83.81,83.81,0,0,1,132,211.9V240a4,4,0,0,1-8,0V211.9A84.11,84.11,0,0,1,44.1,132H16a4,4,0,0,1,0-8H44.1A84.24,84.24,0,0,1,68.6,68.61L45,42.69A4,4,0,0,1,51,37.31L184.77,184.5h0Zm-34.87-26.47L74,74.53a76,76,0,0,0,102.1,112.31Z"/></svg>`;
}
