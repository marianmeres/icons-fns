export const iconPhBoldUmbrellaBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.93,126.3A116.43,116.43,0,0,0,49,50.81a115.45,115.45,0,0,0-37,75.49A20,20,0,0,0,32,148h84v52a36,36,0,0,0,72,0,12,12,0,0,0-24,0,12,12,0,0,1-24,0V148h84a20,20,0,0,0,20-21.7ZM100.41,124c2.67-39.33,18.08-63.51,27.59-74.87,9.52,11.39,24.92,35.56,27.59,74.87ZM65.31,68.46A92,92,0,0,1,99,48.65C88.8,65.25,78.39,90.08,76.36,124H36.44A91.56,91.56,0,0,1,65.31,68.46ZM179.64,124c-2-33.92-12.44-58.75-22.65-75.35A92.19,92.19,0,0,1,219.56,124Z"/></svg>`;
}
