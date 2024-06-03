export const iconBxRegularDialpad = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M10 3h4v3h-4zm0 5h4v3h-4zm0 5h4v3h-4zm6-10h4v3h-4zm0 5h4v3h-4zm0 5h4v3h-4zM4 3h4v3H4zm0 5h4v3H4zm0 5h4v3H4zm6 5h4v3h-4z"/></svg>`;
}
