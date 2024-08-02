export const iconPhBoldDroneBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M42.06,109.94a48,48,0,1,1,67.88-67.88A12,12,0,0,1,93,59,24,24,0,1,0,59,93a12,12,0,1,1-17,17ZM163,59A24,24,0,1,1,197,93a12,12,0,1,0,17,17,48,48,0,1,0-67.88-67.88,12,12,0,0,0,17,17Zm33.94,87a12,12,0,0,0,0,17A24,24,0,1,1,163,197a12,12,0,0,0-17,17,48,48,0,1,0,67.88-67.88A12,12,0,0,0,197,146.06ZM93,197A24,24,0,1,1,59,163a12,12,0,0,0-17-17,48,48,0,1,0,67.88,67.88,12,12,0,1,0-17-17Zm71-88V147l24.49,24.48a12,12,0,0,1-17,17L147,164H109L84.49,188.49a12,12,0,0,1-17-17L92,147V109L67.51,84.49a12,12,0,0,1,17-17L109,92H147l24.48-24.49a12,12,0,0,1,17,17Zm-48,31h24V116H116Z"/></svg>`;
}
