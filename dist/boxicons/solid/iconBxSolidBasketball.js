/*@__PURE__*/
export function iconBxSolidBasketball(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M18.328 4.258a9.953 9.953 0 0 0-5.949-2.235 8.99 8.99 0 0 1-1.835 7.107L12 10.586l6.328-6.328zM7.701 9.115 4.258 5.672a9.938 9.938 0 0 0-2.112 4.704 7.007 7.007 0 0 0 5.555-1.261zm12.041-3.443L13.414 12l1.456 1.456a8.993 8.993 0 0 1 7.107-1.835 9.953 9.953 0 0 0-2.235-5.949zm2.112 7.952a7.007 7.007 0 0 0-5.555 1.261l3.443 3.443a9.924 9.924 0 0 0 2.112-4.704zM9.115 7.701a7.007 7.007 0 0 0 1.261-5.555 9.928 9.928 0 0 0-4.704 2.112l3.443 3.443zm4.509 14.153a9.936 9.936 0 0 0 4.704-2.111L14.885 16.3a7.003 7.003 0 0 0-1.261 5.554zM12 13.414l-6.328 6.328a9.953 9.953 0 0 0 5.949 2.235 8.99 8.99 0 0 1 1.835-7.107L12 13.414zm-7.742 4.914L10.586 12 9.13 10.544a8.993 8.993 0 0 1-7.107 1.835 9.953 9.953 0 0 0 2.235 5.949z"/></svg>`;
}
