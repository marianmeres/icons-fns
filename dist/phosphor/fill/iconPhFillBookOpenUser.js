export const iconPhFillBookOpenUser = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,80V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v63.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V104a32,32,0,0,1,32-32h64A8,8,0,0,1,240,80ZM88.81,56H89a47.92,47.92,0,0,1,36,17.4,4,4,0,0,0,6.08,0A47.92,47.92,0,0,1,167,56h.19a4,4,0,0,0,3.54-5.84,48,48,0,0,0-85.46,0A4,4,0,0,0,88.81,56Z"/></svg>`;
}
