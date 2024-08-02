export const iconPhDuotoneArrowBendDoubleUpRight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,104l-48,48V56Z" opacity="0.2"/><path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48,0-48,48A8,8,0,0,1,120,152V112.37A88.11,88.11,0,0,0,40,200a8,8,0,0,1-16,0A104.15,104.15,0,0,1,120,96.3V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,181.66,109.66Zm-17-5.66L136,75.31v57.38Z"/></svg>`;
}
