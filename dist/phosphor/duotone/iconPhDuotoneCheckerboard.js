export const iconPhDuotoneCheckerboard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M40,128h88v88H48a8,8,0,0,1-8-8ZM208,40H128v88h88V48A8,8,0,0,0,208,40Z" opacity="0.2"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,88H136V48h72ZM120,48v72H48V48ZM48,136h72v72H48Zm160,72H136V136h72v72Z"/></svg>`;
}
