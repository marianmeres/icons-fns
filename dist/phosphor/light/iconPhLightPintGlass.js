export const iconPhLightPintGlass = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204.49,28A6,6,0,0,0,200,26H56a6,6,0,0,0-6,6.71l23.16,193A14,14,0,0,0,87.1,238h81.8a14,14,0,0,0,13.9-12.33L206,32.71A6,6,0,0,0,204.49,28ZM193.24,38l-3.36,28H66.12L62.76,38ZM170.89,224.24a2,2,0,0,1-2,1.76H87.1a2,2,0,0,1-2-1.76L67.56,78H188.44Z"/></svg>`;
}
