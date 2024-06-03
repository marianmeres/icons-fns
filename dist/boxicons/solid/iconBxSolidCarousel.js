export const iconBxSolidCarousel = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M16 3H8c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM2 7v10c0 1.103.897 2 2 2V5c-1.103 0-2 .897-2 2zm18-2v14c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"/></svg>`;
}
