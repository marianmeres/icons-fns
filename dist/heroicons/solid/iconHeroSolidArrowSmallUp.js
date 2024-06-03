export const iconHeroSolidArrowSmallUp = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M12 20.25a.75.75 0 0 1-.75-.75V6.31l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 1 1-1.06 1.06l-5.47-5.47V19.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/></svg>`;
}
