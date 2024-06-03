export const iconBxSolidCheese = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M15.16 2a1 1 0 0 0-.66.13l-12 7a.64.64 0 0 0-.13.1l-.1.08a1.17 1.17 0 0 0-.17.26.84.84 0 0 0-.1.43v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a8.08 8.08 0 0 0-6.84-8zm0 2.05A6.07 6.07 0 0 1 19.93 9H6.7zM6.5 18A1.5 1.5 0 1 1 8 16.5 1.5 1.5 0 0 1 6.5 18zm5-3a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm5.5 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></svg>`;
}
