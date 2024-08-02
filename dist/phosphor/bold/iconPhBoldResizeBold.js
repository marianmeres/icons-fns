export const iconPhBoldResizeBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M136,108H48a12,12,0,0,0-12,12v88a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V120A12,12,0,0,0,136,108Zm-12,88H60V132h64Zm96-8v12a20,20,0,0,1-20,20H180a12,12,0,0,1,0-24h16v-8a12,12,0,0,1,24,0Zm0-72v24a12,12,0,0,1-24,0V116a12,12,0,0,1,24,0Zm0-60V72a12,12,0,0,1-24,0V60H184a12,12,0,0,1,0-24h16A20,20,0,0,1,220,56Zm-68-8a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h24A12,12,0,0,1,152,48ZM36,76V56A20,20,0,0,1,56,36H68a12,12,0,0,1,0,24H60V76a12,12,0,0,1-24,0Z"/></svg>`;
}
