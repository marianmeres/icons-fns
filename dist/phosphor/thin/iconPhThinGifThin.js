export const iconPhThinGifThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M140,72V184a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm92-4H176a4,4,0,0,0-4,4V184a4,4,0,0,0,8,0V132h44a4,4,0,0,0,0-8H180V76h52a4,4,0,0,0,0-8ZM96,124H72a4,4,0,0,0,0,8H92v20a28,28,0,0,1-56,0V104A28,28,0,0,1,64,76c13,0,25,9,28.13,21a4,4,0,1,0,7.74-2C95.85,79.36,80.76,68,64,68a36,36,0,0,0-36,36v48a36,36,0,0,0,72,0V128A4,4,0,0,0,96,124Z"/></svg>`;
}
