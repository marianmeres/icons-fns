export const iconBxRegularReplyAll = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M20 18v-8a1 1 0 0 0-1-1h-6V6l-5 4 5 4v-3h5v7h2z"/><path d="M9 12.4 6 10l3-2.4V6l-5 4 5 4z"/></svg>`;
}
