export const iconPhThinPicnicTable = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M248,132H198.47l-32-64H192a4,4,0,0,0,0-8H64a4,4,0,0,0,0,8H89.53l-32,64H8a4,4,0,0,0,0,8H53.53L28.42,190.21a4,4,0,0,0,1.79,5.37A4.12,4.12,0,0,0,32,196a4,4,0,0,0,3.58-2.21L62.47,140H193.53l26.89,53.79A4,4,0,0,0,224,196a4.12,4.12,0,0,0,1.79-.42,4,4,0,0,0,1.79-5.37L202.47,140H248a4,4,0,0,0,0-8ZM66.47,132l32-64h59.06l32,64Z"/></svg>`;
}
