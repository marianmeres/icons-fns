export const iconPhThinFramerLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M204,104V40a4,4,0,0,0-4-4H56a4,4,0,0,0-2.66,7l64.14,57H56a4,4,0,0,0-4,4v64a4,4,0,0,0,1.17,2.83l72,72A4,4,0,0,0,132,240V172h68a4,4,0,0,0,2.66-7l-64.14-57H200A4,4,0,0,0,204,104Zm-14.52,60H128a4,4,0,0,0-4,4v62.34l-64-64V108h66.48ZM196,100H129.52l-63-56H196Z"/></svg>`;
}
