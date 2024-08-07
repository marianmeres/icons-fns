export const iconPhLightAppStoreLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M62.62,195.05l-9.45,16A6,6,0,0,1,42.83,205l9.46-16a6,6,0,1,1,10.33,6.1ZM232,154H183.06l-31.31-53a6,6,0,1,0-10.33,6.11l61.41,103.93a6,6,0,0,0,10.34-6.1l-23-38.95H232a6,6,0,0,0,0-12Zm-89.53,0H86.88L157.17,35.05A6,6,0,0,0,146.83,29L128,60.82,109.17,29a6,6,0,0,0-10.34,6.1L121,72.62,72.94,154H24a6,6,0,0,0,0,12H142.47a6,6,0,1,0,0-12Z"/></svg>`;
}
