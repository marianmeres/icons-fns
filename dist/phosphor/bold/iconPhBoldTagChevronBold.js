export const iconPhBoldTagChevronBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M250,121.34,204.36,52.91A20,20,0,0,0,187.72,44H32A12,12,0,0,0,22,62.66L65.58,128,22,193.34A12,12,0,0,0,32,212H187.72a20,20,0,0,0,16.64-8.91L250,134.66A12,12,0,0,0,250,121.34ZM185.58,188H54.42L90,134.66a12,12,0,0,0,0-13.32L54.42,68H185.58l40,60Z"/></svg>`;
}
