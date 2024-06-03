export const iconBsUsb = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M2.25 7a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h11.5a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25z"/><path d="M0 5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zM1 10h14V6H1z"/></svg>`;
}
