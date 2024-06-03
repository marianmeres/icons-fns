export const iconBxSolidInbox = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5c0-1.103-.897-2-2-2zm-1 9h-3.142c-.446 1.722-1.997 3-3.858 3s-3.412-1.278-3.858-3H4V5h16v7h-1z"/></svg>`;
}
