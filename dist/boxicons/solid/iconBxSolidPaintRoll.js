export const iconBxSolidPaintRoll = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M18 2H7c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"/><path d="M13 15v-2c0-1.103-.897-2-2-2H4V5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7v2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/></svg>`;
}
