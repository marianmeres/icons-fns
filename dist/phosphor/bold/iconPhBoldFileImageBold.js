export const iconPhBoldFileImageBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M114,145.34a12,12,0,0,0-20,0L79,167.82,72.3,157.73a12,12,0,0,0-20.07.17L13.91,217.51A12,12,0,0,0,24,236H152a12,12,0,0,0,10-18.66ZM46,212,62.5,186.3l6.55,9.81a12,12,0,0,0,20,0l15-22.48L129.58,212ZM216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v84a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212a12,12,0,0,0,0,24h4a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160Z"/></svg>`;
}
