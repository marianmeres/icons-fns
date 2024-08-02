export const iconPhThinBeanie = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M220,164.7V144a92.15,92.15,0,0,0-75.57-90.53,24,24,0,1,0-32.86,0A92.15,92.15,0,0,0,36,144v20.7A12,12,0,0,0,28,176v32a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V176A12,12,0,0,0,220,164.7ZM112,36a16,16,0,1,1,16,16A16,16,0,0,1,112,36Zm16,24a84.09,84.09,0,0,1,84,84v20H44V144A84.09,84.09,0,0,1,128,60Zm-4,112v40H76V172Zm8,0h48v40H132ZM36,208V176a4,4,0,0,1,4-4H68v40H40A4,4,0,0,1,36,208Zm184,0a4,4,0,0,1-4,4H188V172h28a4,4,0,0,1,4,4Z"/></svg>`;
}
