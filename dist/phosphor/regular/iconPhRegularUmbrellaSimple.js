export const iconPhRegularUmbrellaSimple = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,126.63A112.44,112.44,0,0,0,51.75,53.75a111.56,111.56,0,0,0-35.7,72.88A16,16,0,0,0,32,144h88v56a32,32,0,0,0,64,0,8,8,0,0,0-16,0,16,16,0,0,1-32,0V144h88a16,16,0,0,0,16-17.37ZM32,128l0,0A96.43,96.43,0,0,1,193.4,65.52,95.32,95.32,0,0,1,224,128Z"/></svg>`;
}
