export const iconHeroMicroCurrencyYen = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM5.6 3.55a.75.75 0 1 0-1.2.9L7.063 8H4.75a.75.75 0 0 0 0 1.5h2.5v1h-2.5a.75.75 0 0 0 0 1.5h2.5v.5a.75.75 0 0 0 1.5 0V12h2.5a.75.75 0 0 0 0-1.5h-2.5v-1h2.5a.75.75 0 0 0 0-1.5H8.938L11.6 4.45a.75.75 0 1 0-1.2-.9L8 6.75l-2.4-3.2Z" clip-rule="evenodd"/></svg>`;
}
