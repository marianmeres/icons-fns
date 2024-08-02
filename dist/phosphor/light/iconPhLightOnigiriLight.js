export const iconPhLightOnigiriLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M229.82,147.6,174,51.67l-.09-.15a54,54,0,0,0-91.74,0l-.09.15L26.18,147.6A54,54,0,0,0,72.09,230H183.91a54,54,0,0,0,45.91-82.4ZM162,218H94V168a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2Zm58.61-21.58A41.47,41.47,0,0,1,183.91,218H174V168a14,14,0,0,0-14-14H96a14,14,0,0,0-14,14v50H72.09a42,42,0,0,1-35.67-64.15l.08-.14L92.37,57.78a42,42,0,0,1,71.26,0l55.87,95.93.08.14A41.48,41.48,0,0,1,220.6,196.42Z"/></svg>`;
}
