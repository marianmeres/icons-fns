export function iconHeroMiniBuildingStorefront(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M2.879 7.121A3 3 0 0 0 7.5 6.66a2.997 2.997 0 0 0 2.5 1.34 2.997 2.997 0 0 0 2.5-1.34 3 3 0 1 0 4.622-3.78l-.293-.293A2 2 0 0 0 15.415 2H4.585a2 2 0 0 0-1.414.586l-.292.292a3 3 0 0 0 0 4.243ZM3 9.032a4.507 4.507 0 0 0 4.5-.29A4.48 4.48 0 0 0 10 9.5a4.48 4.48 0 0 0 2.5-.758 4.507 4.507 0 0 0 4.5.29V16.5h.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5H3V9.032Z"/></svg>`;
}
