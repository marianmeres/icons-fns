export const iconHeroMicroViewColumns = (props = {}) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M9.836 3h-3.67v10h3.67V3ZM11.336 13H13.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-2.164v10ZM2.5 3h2.166v10H2.5A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3Z"/></svg>`;
}
