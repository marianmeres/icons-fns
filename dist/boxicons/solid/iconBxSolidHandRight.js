export const iconBxSolidHandRight = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20 8H8l1.212-3.03a2 2 0 0 0-1.225-2.641l-.34-.113a.998.998 0 0 0-1.084.309L2.231 7.722a1.001 1.001 0 0 0-.231.64V19a2 2 0 0 0 2 2h7.21a2 2 0 0 0 1.987-1.779L14 12h6a2 2 0 0 0 0-4z"/></svg>`;
}
