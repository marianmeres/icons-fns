export const iconPhThinCallBell = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M24,180H232a4,4,0,0,0,0-8H220V152a92.11,92.11,0,0,0-88-91.91V36h20a4,4,0,0,0,0-8H104a4,4,0,0,0,0,8h20V60.09A92.11,92.11,0,0,0,36,152v20H24a4,4,0,0,0,0,8Zm20-28a84,84,0,0,1,168,0v20H44Zm192,56a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H232A4,4,0,0,1,236,208Z"/></svg>`;
}
