export const iconBxRegularRename = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2zm-14 4H15v4H6.005z"/><path d="M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995v-2.005zm-13-2v-8h11v8h-11z"/></svg>`;
}
