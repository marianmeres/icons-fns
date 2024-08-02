export const iconPhLightPhosphorLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152,34H72a6,6,0,0,0-6,6V168a78.09,78.09,0,0,0,78,78,6,6,0,0,0,6-6V174h2a70,70,0,0,0,0-140ZM78,62.91,133.74,162H78Zm60,82.19L82.26,46H138ZM78.28,174H138v59.73A66.1,66.1,0,0,1,78.28,174ZM152,162h-2V46h2a58,58,0,0,1,0,116Z"/></svg>`;
}
