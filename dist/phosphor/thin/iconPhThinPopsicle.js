export const iconPhThinPopsicle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,12A68.07,68.07,0,0,0,60,80v96a12,12,0,0,0,12,12h36v44a20,20,0,0,0,40,0V188h36a12,12,0,0,0,12-12V80A68.07,68.07,0,0,0,128,12Zm12,220a12,12,0,0,1-24,0V188h24Zm48-56a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V80a60,60,0,0,1,120,0ZM116,72v80a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm32,0v80a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Z"/></svg>`;
}
