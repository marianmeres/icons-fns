export const iconBxRegularArrowToLeft = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M4 6h2v12H4zm10.293-.707L7.586 12l6.707 6.707 1.414-1.414L11.414 13H20v-2h-8.586l4.293-4.293z"/></svg>`;
}
