export const iconPhBoldUmbrellaSimpleBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.93,126.3A116.43,116.43,0,0,0,49,50.81a115.45,115.45,0,0,0-37,75.49A20,20,0,0,0,32,148h84v52a36,36,0,0,0,72,0,12,12,0,0,0-24,0,12,12,0,0,1-24,0V148h84a20,20,0,0,0,20-21.7ZM36.44,124A92.45,92.45,0,0,1,190.69,68.46,91.56,91.56,0,0,1,219.56,124Z"/></svg>`;
}
