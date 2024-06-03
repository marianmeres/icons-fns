export const iconBxSolidBong = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m19.293 8.293-2.069 2.069A7.017 7.017 0 0 0 15 8.681V4h1V2H8v2h1v4.681A7.01 7.01 0 0 0 5 15c0 3.859 3.141 7 7 7s7-3.141 7-7a6.958 6.958 0 0 0-.652-2.934l2.359-2.359-1.414-1.414zm-8.959 1.998.666-.235V4h2v6.056l.666.235A5.006 5.006 0 0 1 16.886 14H7.114a5.006 5.006 0 0 1 3.22-3.709z"/></svg>`;
}
