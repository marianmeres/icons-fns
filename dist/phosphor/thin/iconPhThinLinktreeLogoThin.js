export const iconPhThinLinktreeLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M132,160v72a4,4,0,0,1-8,0V160a4,4,0,0,1,8,0Zm76-60H137.66l49.17-49.17a4,4,0,1,0-5.66-5.66L132,94.34V24a4,4,0,0,0-8,0V94.34L74.83,45.17a4,4,0,0,0-5.66,5.66L118.34,100H48a4,4,0,0,0,0,8h70.34L69.17,157.17a4,4,0,0,0,5.66,5.66L128,109.66l53.17,53.17a4,4,0,0,0,5.66-5.66L137.66,108H208a4,4,0,0,0,0-8Z"/></svg>`;
}
