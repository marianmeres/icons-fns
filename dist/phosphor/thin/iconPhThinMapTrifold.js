export const iconPhThinMapTrifold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.46,52.85a4,4,0,0,0-3.43-.73L160.47,67.76,97.79,36.42a4,4,0,0,0-2.76-.3l-64,16A4,4,0,0,0,28,56V200a4,4,0,0,0,5,3.88l62.56-15.64,62.68,31.34a4,4,0,0,0,2.76.3l64-16a4,4,0,0,0,3-3.88V56A4,4,0,0,0,226.46,52.85ZM100,46.47l56,28V209.53l-56-28ZM36,59.12l56-14V180.88l-56,14ZM220,196.88l-56,14V75.12l56-14Z"/></svg>`;
}
