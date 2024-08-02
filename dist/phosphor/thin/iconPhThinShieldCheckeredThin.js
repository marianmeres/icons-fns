export const iconPhThinShieldCheckeredThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44Zm4,12v56q0,6.12-.49,12H132V52h76A4,4,0,0,1,212,56ZM44,56a4,4,0,0,1,4-4h76v72H44.49Q44,118.12,44,112Zm1.38,76H124v94.44a135.16,135.16,0,0,1-37.71-21.73C63.27,185.78,49.56,161.38,45.38,132Zm124.33,72.71A134.9,134.9,0,0,1,132,226.44V132h78.62C206.44,161.38,192.73,185.78,169.71,204.71Z"/></svg>`;
}
