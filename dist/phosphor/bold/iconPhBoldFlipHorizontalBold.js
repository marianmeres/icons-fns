export const iconPhBoldFlipHorizontalBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M104,20.41a19.83,19.83,0,0,0-22.4,11.81c-.07.15-.13.31-.19.46L21.47,192.49A20,20,0,0,0,40,220h60a20,20,0,0,0,20-20V40A19.83,19.83,0,0,0,104,20.41ZM96,196H45.79L96,62.09Zm138.53-3.51L174.61,32.68c-.06-.15-.12-.31-.19-.46A20,20,0,0,0,136,40V200a20,20,0,0,0,20,20h60a20,20,0,0,0,18.54-27.51ZM160,196V62.09L210.21,196Z"/></svg>`;
}
