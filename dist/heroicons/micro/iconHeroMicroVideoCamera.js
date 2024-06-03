export const iconHeroMicroVideoCamera = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M3 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3ZM15 4.75a.75.75 0 0 0-1.28-.53l-2 2a.75.75 0 0 0-.22.53v2.5c0 .199.079.39.22.53l2 2a.75.75 0 0 0 1.28-.53v-6.5Z"/></svg>`;
}
