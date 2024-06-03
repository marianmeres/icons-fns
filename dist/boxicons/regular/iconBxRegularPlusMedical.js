export const iconBxRegularPlusMedical = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"/></svg>`;
}
