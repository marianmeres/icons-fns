export const iconBxRegularRightIndent = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M10 15h10v2H10zm-6 4h16v2H4zm6-8h10v2H10zm0-4h10v2H10zM4 3h16v2H4zm0 5v8l4-4z"/></svg>`;
}
