export const iconBxRegularBorderInner = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19 19h2v2h-2zM7 19h2v2H7zm8 0h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm0-4h2v2H3zm12 0h2v2h-2zM7 3h2v2H7zm12 0h2v2h-2zm0 12h2v2h-2zm0-8h2v2h-2z"/><path d="M5 13h6v8h2v-8h8v-2h-8V3h-2v8H3v2h1.93z"/></svg>`;
}
