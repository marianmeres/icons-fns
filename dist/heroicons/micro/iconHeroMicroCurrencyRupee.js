export const iconHeroMicroCurrencyRupee = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM4.75 4a.75.75 0 0 0 0 1.5H6.5c.698 0 1.3.409 1.582 1H4.75a.75.75 0 0 0 0 1.5h3.332C7.8 8.591 7.198 9 6.5 9H4.75a.75.75 0 0 0-.53 1.28l2.5 2.5a.75.75 0 0 0 1.06-1.06L6.56 10.5A3.251 3.251 0 0 0 9.663 8h1.587a.75.75 0 0 0 0-1.5H9.663a3.232 3.232 0 0 0-.424-1h2.011a.75.75 0 0 0 0-1.5h-6.5Z" clip-rule="evenodd"/></svg>`;
}
