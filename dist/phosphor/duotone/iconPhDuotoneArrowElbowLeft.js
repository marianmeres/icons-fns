export const iconPhDuotoneArrowElbowLeft = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M96,80,24,152V80Z" opacity="0.2"/><path d="M237.66,90.34a8,8,0,0,0-11.32,0L136,180.69,71.31,116l30.35-30.34A8,8,0,0,0,96,72H24a8,8,0,0,0-8,8v72a8,8,0,0,0,13.66,5.66L60,127.31l70.34,70.35a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,237.66,90.34ZM32,132.69V88H76.69Z"/></svg>`;
}
