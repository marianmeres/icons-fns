export const iconPhFillChatTeardropSlashFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-13.57-14.92A99.4,99.4,0,0,1,132,224H48a16,16,0,0,1-16-16V124A99.54,99.54,0,0,1,55.29,59.92L42.08,45.38a8,8,0,0,1,.72-11.46,8.22,8.22,0,0,1,11.34.95Zm-5.57-29.91a4,4,0,0,0,6.24-.4A100,100,0,0,0,83.78,36.42a4,4,0,0,0-1,6.18Z"/></svg>`;
}
