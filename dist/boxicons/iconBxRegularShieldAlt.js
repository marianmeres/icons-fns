export function iconBxRegularShieldAlt(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m20.342 8.447 1.105-.553A.998.998 0 0 0 21.8 6.4l-3-4A1 1 0 0 0 18 2H6a1 1 0 0 0-.8.4l-3 4a1 1 0 0 0 .352 1.494l1.105.553-1.131 2.262A5.052 5.052 0 0 0 2 12.944v.591a6.028 6.028 0 0 0 3.894 5.618l3.431 1.286a5.488 5.488 0 0 1 1.969 1.268.997.997 0 0 0 1.413 0 5.486 5.486 0 0 1 1.969-1.267l3.432-1.287A6.03 6.03 0 0 0 22 13.535v-.591c0-.771-.183-1.545-.527-2.236l-1.131-2.261zM20 13.535a4.019 4.019 0 0 1-2.596 3.745l-3.431 1.287a7.5 7.5 0 0 0-1.974 1.101 7.515 7.515 0 0 0-1.974-1.102L6.596 17.28A4.019 4.019 0 0 1 4 13.535v-.591c0-.463.109-.928.316-1.342l1.131-2.261a2.003 2.003 0 0 0-.895-2.684l-.033-.015L6.5 4h11l1.981 2.642-.034.017a2.004 2.004 0 0 0-.895 2.684l1.131 2.26c.208.414.317.878.317 1.341v.591z"/></svg>`;
}
