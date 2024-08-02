export const iconPhThinEmptyThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192.76,62.72l18.2-20A4,4,0,0,0,205,37.31l-18.2,20a92,92,0,0,0-123.6,136l-18.2,20A4,4,0,1,0,51,218.69l18.2-20A92,92,0,0,0,192.76,62.72ZM44,128A84,84,0,0,1,181.46,63.25L68.63,187.36A83.72,83.72,0,0,1,44,128Zm84,84a83.64,83.64,0,0,1-53.46-19.25L187.37,68.64A84,84,0,0,1,128,212Z"/></svg>`;
}
