export const iconPhThinUmbrellaSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M236,127A108.44,108.44,0,0,0,54.46,56.69,107.53,107.53,0,0,0,20,127a12,12,0,0,0,12,13h92v60a28,28,0,0,0,56,0,4,4,0,0,0-8,0,20,20,0,0,1-40,0V140h92a12,12,0,0,0,12-13Zm-9,3.74a4,4,0,0,1-3,1.3H32a4,4,0,0,1-4-4.38,100.43,100.43,0,0,1,168.1-65,99.53,99.53,0,0,1,31.88,65A4,4,0,0,1,226.93,130.7Z"/></svg>`;
}
