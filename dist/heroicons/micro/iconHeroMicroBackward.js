export const iconHeroMicroBackward = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M8.5 4.75a.75.75 0 0 0-1.107-.66l-6 3.25a.75.75 0 0 0 0 1.32l6 3.25a.75.75 0 0 0 1.107-.66V8.988l5.393 2.921A.75.75 0 0 0 15 11.25v-6.5a.75.75 0 0 0-1.107-.66L8.5 7.013V4.75Z"/></svg>`;
}
