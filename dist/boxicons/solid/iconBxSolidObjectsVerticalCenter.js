export const iconBxSolidObjectsVerticalCenter = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19 7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4h-2V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6H2v2h3v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6h2v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h3v-2h-3z"/></svg>`;
}
