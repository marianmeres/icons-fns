export const iconPhDuotoneSimCardDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M176,120v72H80V120Z" opacity="0.2"/><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM200,216H56V40h92.69L200,91.31V216ZM176,112H80a8,8,0,0,0-8,8v72a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V120A8,8,0,0,0,176,112Zm-8,72H152V152a8,8,0,0,0-16,0v32H120V152a8,8,0,0,0-16,0v32H88V128h80Z"/></svg>`;
}
