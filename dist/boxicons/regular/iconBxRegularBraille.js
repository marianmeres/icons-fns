export const iconBxRegularBraille = (props = {}) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><circle cx="4" cy="7" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="15" cy="7" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="15" cy="17" r="2"/><circle cx="20" cy="7" r="2"/><circle cx="4" cy="17" r="2"/></svg>`;
}
