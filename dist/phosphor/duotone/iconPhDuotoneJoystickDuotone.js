export const iconPhDuotoneJoystickDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M216,160v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H208A8,8,0,0,1,216,160ZM128,88A32,32,0,1,0,96,56,32,32,0,0,0,128,88Z" opacity="0.2"/><path d="M208,144H136V95.19a40,40,0,1,0-16,0V144H48a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V160A16,16,0,0,0,208,144ZM104,56a24,24,0,1,1,24,24A24,24,0,0,1,104,56ZM208,208H48V160H208v48Zm-40-96h32a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16Z"/></svg>`;
}
