export const iconPhFillMusicNotesMinus = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,40H176a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"/><path d="M162.13,76.5a31.57,31.57,0,0,1-16.44-38.76A4,4,0,0,0,141,32.53L78.06,48.25A8,8,0,0,0,72,56V166.1A36,36,0,1,0,52.42,232C72.25,231.77,88,215.13,88,195.3V102.25l73.26-18.31A4,4,0,0,0,162.13,76.5Z"/><path d="M212,80h-8a4,4,0,0,0-4,4v50.1A36,36,0,1,0,180.42,200c19.83-.23,35.58-16.86,35.58-36.7V84A4,4,0,0,0,212,80Z"/></svg>`;
}
