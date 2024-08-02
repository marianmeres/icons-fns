export const iconPhBoldJoystick = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,144H140V98.32a44,44,0,1,0-24,0V144H48a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V164A20,20,0,0,0,208,144ZM108,56a20,20,0,1,1,20,20A20,20,0,0,1,108,56Zm96,148H52V168H204ZM172,104h32a12,12,0,0,1,0,24H172a12,12,0,0,1,0-24Z"/></svg>`;
}
