export const iconBxRegularVerticalBottom = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M18 19h3v2h-3zM13 19h3v2h-3zM8 19h3v2H8zM3 19h3v2H3zM13 5h-2v8H8l4 4 4-4h-3V5z"/></svg>`;
}
