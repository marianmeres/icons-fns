export const iconHeroMicroDocumentCurrencyPound = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M2.5 3.5A1.5 1.5 0 0 1 4 2h4.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12a1.5 1.5 0 0 1 .439 1.061V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9Zm5.44 3.44a1.5 1.5 0 0 1 2.12 0 .75.75 0 1 0 1.061-1.061A3 3 0 0 0 6 7.999H4.75a.75.75 0 0 0 0 1.5h1.225c-.116.571-.62 1-1.225 1a.75.75 0 1 0 0 1.5h5.5a.75.75 0 0 0 0-1.5H7.2c.156-.304.257-.642.289-1H9.25a.75.75 0 0 0 0-1.5H7.5c0-.384.146-.767.44-1.06Z" clip-rule="evenodd"/></svg>`;
}