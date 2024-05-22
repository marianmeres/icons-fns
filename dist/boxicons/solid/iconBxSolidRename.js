export const iconBxSolidRename = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20 5.995h-1v12h1c1.103 0 2-.897 2-2v-8c0-1.102-.897-2-2-2z"/><path d="M17 17.995V4h2.995V2h-8v2H15v1.995H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20h-3.005v2h8v-2H17v-2.005zm-11-4v-4h9v4H6z"/></svg>`;
}
