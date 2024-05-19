export const iconBxRegularSprayCan = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M11.002 2h-4a1 1 0 0 0-1 1v3.812a5.998 5.998 0 0 0-3 5.188v.988L3 13l.002.072V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a5.999 5.999 0 0 0-3-5.188V3a1 1 0 0 0-1-1zm-3 4V4h2v2h-2zm5.001 14h-8v-6h8v6zm-8.001-8c0-2.206 1.794-4 4-4s4 1.794 4 4h-8zm8.001-9h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/></svg>`;
}
