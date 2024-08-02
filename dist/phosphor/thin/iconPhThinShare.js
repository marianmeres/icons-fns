export const iconPhThinShare = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M226.83,106.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,108H165a92,92,0,0,0-89.11,69A4,4,0,0,1,72,180a3.87,3.87,0,0,1-1-.13A4,4,0,0,1,68.13,175,99.93,99.93,0,0,1,165,100h49.36L173.17,58.83a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,106.83ZM192,212H36V88a4,4,0,0,0-8,0V216a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8Z"/></svg>`;
}
