export const iconPhLightMailboxLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M102,152a6,6,0,0,1-6,6H56a6,6,0,0,1,0-12H96A6,6,0,0,1,102,152Zm136-36v60a14,14,0,0,1-14,14H134v34a6,6,0,0,1-12,0V190H32a14,14,0,0,1-14-14V116A58.07,58.07,0,0,1,76,58h78V24a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H166V58h14A58.07,58.07,0,0,1,238,116ZM122,178V116a46,46,0,0,0-92,0v60a2,2,0,0,0,2,2Zm104-62a46.06,46.06,0,0,0-46-46H166v74a6,6,0,0,1-12,0V70H111.29A57.93,57.93,0,0,1,134,116v62h90a2,2,0,0,0,2-2Z"/></svg>`;
}
