export const iconPhBoldAppStoreLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M244,160a12,12,0,0,1-12,12H200.67l17.66,29.89a12,12,0,1,1-20.66,12.21L140.9,118a12,12,0,0,1,20.66-12.2L186.48,148H232A12,12,0,0,1,244,160ZM133.15,148H97.39L162.33,38.11A12,12,0,1,0,141.67,25.9L128,49,114.33,25.9A12,12,0,1,0,93.67,38.11l20.39,34.51L69.52,148H24a12,12,0,0,0,0,24H133.15a12,12,0,0,0,0-24ZM58.83,189.67a12,12,0,0,0-16.43,4.22l-4.73,8A12,12,0,1,0,58.33,214.1l4.73-8A12,12,0,0,0,58.83,189.67Z"/></svg>`;
}
