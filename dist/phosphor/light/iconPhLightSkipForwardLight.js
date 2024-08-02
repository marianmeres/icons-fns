export const iconPhLightSkipForwardLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,34a6,6,0,0,0-6,6v72.84L71.37,36.14a14,14,0,0,0-14.21-.37A13.69,13.69,0,0,0,50,47.88V208.12a13.69,13.69,0,0,0,7.16,12.11,14,14,0,0,0,14.21-.37L194,143.17V216a6,6,0,0,0,12,0V40A6,6,0,0,0,200,34Zm-6.88,95.56L65,209.69a2,2,0,0,1-2,.05,1.79,1.79,0,0,1-1-1.62V47.88a1.79,1.79,0,0,1,1-1.62A2.1,2.1,0,0,1,64,46a2,2,0,0,1,1,.31l128.12,80.13a1.82,1.82,0,0,1,0,3.12Z"/></svg>`;
}
