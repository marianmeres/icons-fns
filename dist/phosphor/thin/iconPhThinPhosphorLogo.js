export const iconPhThinPhosphorLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152,36H72a4,4,0,0,0-4,4V168a76.08,76.08,0,0,0,76,76,4,4,0,0,0,4-4V172h4a68,68,0,0,0,0-136ZM76,55.27,137.16,164H76Zm64,97.46L78.84,44H140ZM76.13,172H140v63.88A68.1,68.1,0,0,1,76.13,172ZM152,164h-4V44h4a60,60,0,0,1,0,120Z"/></svg>`;
}
