export const iconHeroSolidVideoCameraSlash = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M.97 3.97a.75.75 0 0 1 1.06 0l15 15a.75.75 0 1 1-1.06 1.06l-15-15a.75.75 0 0 1 0-1.06ZM17.25 16.06l2.69 2.69c.944.945 2.56.276 2.56-1.06V6.31c0-1.336-1.616-2.005-2.56-1.06l-2.69 2.69v8.12ZM15.75 7.5v8.068L4.682 4.5h8.068a3 3 0 0 1 3 3ZM1.5 16.5V7.682l11.773 11.773c-.17.03-.345.045-.523.045H4.5a3 3 0 0 1-3-3Z"/></svg>`;
}
