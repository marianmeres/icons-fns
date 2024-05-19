export function iconHeroMiniPlayPause(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M12.75 4a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V4.75a.75.75 0 0 0-.75-.75h-.5ZM17.75 4a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 .75-.75V4.75a.75.75 0 0 0-.75-.75h-.5ZM3.288 4.819A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.277l6.323-3.906a1.5 1.5 0 0 0 0-2.552L3.288 4.819Z"/></svg>`;
}
