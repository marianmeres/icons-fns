export const iconBxRegularFoodMenu = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"/><path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"/></svg>`;
}
