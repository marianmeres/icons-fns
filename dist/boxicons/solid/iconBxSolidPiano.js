export const iconBxSolidPiano = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm0 16H5a1 1 0 0 1-1-1v-6h2v4h2v-4h1v4h2v-4h1v4h2v-4h2v4h2v-4h2v6a1 1 0 0 1-1 1z"/></svg>`;
}
