export const iconPhFillNetworkXFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M240,120a8,8,0,0,1-8,8H200v16a8,8,0,0,1-16,0V128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h96V88h-8A16,16,0,0,1,96,72V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16h-8v24h96A8,8,0,0,1,240,120Zm-18.34,42.34a8,8,0,0,0-11.32,0L192,180.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L180.69,192l-18.35,18.34a8,8,0,0,0,11.32,11.32L192,203.31l18.34,18.35a8,8,0,0,0,11.32-11.32L203.31,192l18.35-18.34A8,8,0,0,0,221.66,162.34Z"/></svg>`;
}
