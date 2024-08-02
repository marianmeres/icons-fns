export const iconHeroMiniArrowTurnRightUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M3 16.25a.75.75 0 0 1 .75-.75h7.5V4.56L9.28 6.53a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-1.06 1.06l-1.97-1.97v11.69A.75.75 0 0 1 12 17H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/></svg>`;
}
