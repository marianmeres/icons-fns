export const iconBxRegularCircleQuarter = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2h-1v11h11v-1A10 10 0 0 0 12 2zm1 9V4.06A8 8 0 0 1 19.94 11z"/></svg>`;
}
