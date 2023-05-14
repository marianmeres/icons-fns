export function iconHeroSolidServerStack(props) {
    // Backward compatible signature support: fn(cls, size, style)
    if (props === null || props === undefined)
        props = {};
    if (typeof props !== 'object')
        props = { class: props || '' };
    if (arguments.length > 1)
        props.size ??= arguments[1];
    if (arguments.length > 2)
        props.style ??= arguments[2];
    // 
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z"/><path fill-rule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clip-rule="evenodd"/></svg>`;
}
