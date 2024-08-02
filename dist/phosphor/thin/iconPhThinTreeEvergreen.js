export const iconPhThinTreeEvergreen = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.16,189.54l-51-65.54H208a4,4,0,0,0,3.17-6.44l-80-104a4,4,0,0,0-6.34,0l-80,104A4,4,0,0,0,48,124H79.82l-51,65.54A4,4,0,0,0,32,196h92v44a4,4,0,0,0,8,0V196h92a4,4,0,0,0,3.16-6.46ZM40.18,188l51-65.54A4,4,0,0,0,88,116H56.12L128,22.56,199.88,116H168a4,4,0,0,0-3.16,6.46l51,65.54Z"/></svg>`;
}
