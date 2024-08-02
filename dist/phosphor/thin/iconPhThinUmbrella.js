export const iconPhThinUmbrella = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,127A108.44,108.44,0,0,0,54.46,56.69,107.53,107.53,0,0,0,20,127a12,12,0,0,0,12,13h92v60a28,28,0,0,0,56,0,4,4,0,0,0-8,0,20,20,0,0,1-40,0V140h92a12,12,0,0,0,12-13ZM32,132a4,4,0,0,1-4-4.38,100.2,100.2,0,0,1,89.73-91.09C106,49.76,85.08,80.45,84,132Zm60,0c1.21-56,27.6-86.37,35.94-94.57C136.35,45.64,162.73,76,163.94,132Zm134.87-1.3a4,4,0,0,1-3,1.3H172c-1-51.55-22-82.24-33.7-95.47A100.2,100.2,0,0,1,228,127.62,4,4,0,0,1,226.93,130.7Z"/></svg>`;
}
