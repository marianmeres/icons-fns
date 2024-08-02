export const iconPhBoldPentagram = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243,89.83A19.94,19.94,0,0,0,224,76H165.85l-18.8-57.95A19.93,19.93,0,0,0,109,18L90.15,76H32A20,20,0,0,0,20.3,112.22l47.1,33.89-18.07,55.7A20,20,0,0,0,80.07,224.2L128,189.71l47.89,34.45a20,20,0,0,0,30.78-22.35l-18.07-55.7,47.15-33.92A20,20,0,0,0,243,89.83ZM128,37.11,140.62,76H115.38ZM44.42,100H82.36l-7.18,22.13Zm31.51,97.6,11.93-36.78,19.59,14.1Zm19.71-60.75,12-36.85h40.82l12,36.85L128,160.14Zm52.91,38.07,19.59-14.1,11.93,36.78Zm32.27-52.79L173.64,100h37.94Z"/></svg>`;
}
