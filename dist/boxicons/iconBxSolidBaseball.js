export function iconBxSolidBaseball(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M21.984 12.236a9.966 9.966 0 0 0-2.913-7.308 9.966 9.966 0 0 0-7.308-2.913 9.04 9.04 0 0 1-.673 4.313l-1.84-.78a7.044 7.044 0 0 0 .526-3.284 9.927 9.927 0 0 0-4.847 2.665 9.924 9.924 0 0 0-2.666 4.852 7.082 7.082 0 0 0 2.576-.276l.575 1.916c-1.1.33-2.257.443-3.398.344a9.964 9.964 0 0 0 2.913 7.307 9.965 9.965 0 0 0 7.307 2.913 9.079 9.079 0 0 1 .344-3.398l1.916.575a7.06 7.06 0 0 0-.276 2.576 9.927 9.927 0 0 0 4.853-2.666 9.926 9.926 0 0 0 2.665-4.848 7.056 7.056 0 0 0-3.284.526l-.78-1.841a9.025 9.025 0 0 1 4.31-.673zM9.17 9.173a9.017 9.017 0 0 1-2.192 1.612l-.927-1.772a7.01 7.01 0 0 0 2.576-2.314l1.663 1.113c-.328.49-.705.948-1.12 1.361zm7.074 7.068a6.991 6.991 0 0 0-1.257 1.708l-1.772-.927a9.025 9.025 0 0 1 2.972-3.312l1.113 1.663a6.987 6.987 0 0 0-1.056.868z"/></svg>`;
}
