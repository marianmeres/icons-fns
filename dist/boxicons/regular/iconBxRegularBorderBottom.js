export const iconBxRegularBorderBottom = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M3 7h2v2H3zm0 4h2v2H3zm0 4h2v2H3zM3 3h2v2H3zm8 0h2v2h-2zM7 3h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2zm0 12h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-8 0h2v2H7zm4-4h2v2h-2zm0 8h2v2h-2zm0-4h2v2h-2zm6 8H3v2h18v-2h-2z"/></svg>`;
}
