export const iconPhBoldDisc = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm42.32,96a44,44,0,0,0-3.91-9.44l28.84-28.84A83.55,83.55,0,0,1,211.13,116ZM148,128a20,20,0,1,1-20-20A20,20,0,0,1,148,128Zm-20,84A84,84,0,1,1,178.28,60.75L149.43,89.59A44,44,0,1,0,170.32,140h40.81A84.12,84.12,0,0,1,128,212Z"/></svg>`;
}
