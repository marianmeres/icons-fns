export const iconPhDuotoneFileVueDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208,88H152V32Z" opacity="0.2"/><path d="M87.54,154.69l-20,56a8,8,0,0,1-15.07,0l-20-56a8,8,0,0,1,15.07-5.38L60,184.21l12.47-34.9a8,8,0,0,1,15.07,5.38ZM208,160a8,8,0,0,0,0-16H176a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H184V188h16a8,8,0,0,0,0-16H184V160Zm-64-16a8,8,0,0,0-8,8v38a10,10,0,0,1-20,0V152a8,8,0,0,0-16,0v38a26,26,0,0,0,52,0V152A8,8,0,0,0,144,144Zm72-56v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z"/></svg>`;
}
