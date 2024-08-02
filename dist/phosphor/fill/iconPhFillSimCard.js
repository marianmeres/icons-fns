export const iconPhFillSimCard = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM184,192a8,8,0,0,1-8,8H160a4,4,0,0,1-4-4V160.27a8.17,8.17,0,0,0-7.47-8.25,8,8,0,0,0-8.53,8v36a4,4,0,0,1-4,4H120a4,4,0,0,1-4-4V160.27a8.17,8.17,0,0,0-7.47-8.25,8,8,0,0,0-8.53,8v36a4,4,0,0,1-4,4H80a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"/></svg>`;
}
