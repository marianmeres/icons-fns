export const iconPhBoldEscalatorUpBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,36H168a12,12,0,0,0-8.82,3.86L66.75,140H32a20,20,0,0,0-20,20v40a20,20,0,0,0,20,20H88a12,12,0,0,0,8.82-3.86L189.25,116H224a20,20,0,0,0,20-20V56A20,20,0,0,0,224,36Zm-4,56H184a12,12,0,0,0-8.82,3.86L82.75,196H36V164H72a12,12,0,0,0,8.82-3.86L173.25,60H220Zm12.49,75.51a12,12,0,0,1-17,17L212,181v27a12,12,0,0,1-24,0V181l-3.51,3.52a12,12,0,0,1-17-17l24-24a12,12,0,0,1,17,0Z"/></svg>`;
}
