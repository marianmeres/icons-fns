export const iconPhBoldDeviceTabletCamera = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M192,20H64A28,28,0,0,0,36,48V208a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V48A28,28,0,0,0,192,20Zm4,188a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4ZM144,76a16,16,0,1,1-16-16A16,16,0,0,1,144,76Z"/></svg>`;
}
