export const iconBxRegularObjectsVerticalCenter = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20 7a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4h-2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6H2v2h2v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6h2v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4h2v-2h-2zM9 18H6V6h3zm9-2h-3V8h3z"/></svg>`;
}
