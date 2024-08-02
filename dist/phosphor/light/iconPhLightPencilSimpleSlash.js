export const iconPhLightPencilSimpleSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52.44,36A6,6,0,0,0,43.56,44L93.05,98.47,38.1,153.42a13.9,13.9,0,0,0-4.1,9.89V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L154.46,166l49.11,54a6,6,0,0,0,8.88-8.08ZM94.1,209.42a2,2,0,0,1-1.41.58H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41l54.54-54.54,45.25,49.78ZM225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L119.75,71.77a6,6,0,0,0,8.48,8.49L136,72.48,183.52,120l-10.44,10.44a6,6,0,1,0,8.49,8.48l44.34-44.33A14,14,0,0,0,225.91,74.79ZM217.42,86.1,192,111.52,144.49,64l25.42-25.41a2,2,0,0,1,2.82,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z"/></svg>`;
}
