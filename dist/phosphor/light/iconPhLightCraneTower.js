export const iconPhLightCraneTower = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,82H107.71L85.37,37.32A6,6,0,0,0,80,34H48a6,6,0,0,0-6,6V82H24a6,6,0,0,0,0,12H42V210H24a6,6,0,0,0,0,12H128a6,6,0,0,0,0-12H110V94H210v90a2,2,0,0,1-2,2H192a2,2,0,0,1-2-2v-8a6,6,0,0,0-12,0v8a14,14,0,0,0,14,14h16a14,14,0,0,0,14-14V94h18a6,6,0,0,0,0-12ZM54,46H76.29l18,36H54Zm0,164V158H98v52Zm44-64H54V94H98Z"/></svg>`;
}
