export const iconPhFillNotEqualsFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,144a8,8,0,0,1,0,16H110.63L78,197.27a8,8,0,0,1-12-10.54L89.37,160H72a8,8,0,0,1,0-16h31.37l28-32H72a8,8,0,0,1,0-16h73.37L178,58.73a8,8,0,1,1,12,10.54L166.63,96H184a8,8,0,0,1,0,16H152.63l-28,32Z"/></svg>`;
}
