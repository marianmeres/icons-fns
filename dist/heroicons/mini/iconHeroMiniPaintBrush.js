/*@__PURE__*/
export function iconHeroMiniPaintBrush(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M15.993 1.385a1.87 1.87 0 0 1 2.623 2.622l-4.03 5.27a12.749 12.749 0 0 1-4.237 3.562 4.508 4.508 0 0 0-3.188-3.188 12.75 12.75 0 0 1 3.562-4.236l5.27-4.03ZM6 11a3 3 0 0 0-3 3 .5.5 0 0 1-.72.45.75.75 0 0 0-1.035.931A4.001 4.001 0 0 0 9 14.004V14a3.01 3.01 0 0 0-1.66-2.685A2.99 2.99 0 0 0 6 11Z"/></svg>`;
}
