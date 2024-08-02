export const iconPhThinAsclepius = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,79v1a36,36,0,0,1-36,36H132v88h12a20,20,0,0,0,13.33-34.91,4,4,0,1,1,5.34-6A28,28,0,0,1,144,212H132v20a4,4,0,0,1-8,0V212H96a4,4,0,0,1,0-8h28V116H96a20,20,0,0,0,0,40,4,4,0,0,1,0,8,28,28,0,0,1,0-56h28V24a4,4,0,0,1,8,0v84h44a28,28,0,0,0,28-28V79a27,27,0,0,0-27-27H160a4,4,0,0,1,0-8h17a35,35,0,0,1,35,35ZM56,92H32a4,4,0,0,1-4-4V80A36,36,0,0,1,64,44H96a4,4,0,0,1,0,8H92v4A36,36,0,0,1,56,92ZM84,56V52H64A28,28,0,0,0,36,80v4H56A28,28,0,0,0,84,56Z"/></svg>`;
}
