export const iconPhBoldSmileyAngry = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,156a16,16,0,1,1,16-16A16,16,0,0,1,92,156Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,124Zm72,4A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM85.34,102l36,24a12,12,0,0,0,13.32,0l36-24a12,12,0,0,0-13.32-20L128,101.58,98.66,82a12,12,0,0,0-13.32,20ZM154,167.12a51.1,51.1,0,0,0-52,0,12,12,0,1,0,12,20.76,27.13,27.13,0,0,1,28,0,12,12,0,1,0,12-20.76Z"/></svg>`;
}
