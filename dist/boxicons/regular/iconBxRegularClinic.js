export const iconBxRegularClinic = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12.707 2.293a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a.999.999 0 0 0 .707-1.707l-9-9zM18.001 20H6v-9.586l6-6 6 6V15l.001 5z"/><path d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"/></svg>`;
}
