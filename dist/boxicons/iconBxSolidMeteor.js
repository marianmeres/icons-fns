export function iconBxSolidMeteor(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M13.507 2.138a1 1 0 0 0-1.155.102L4.196 9.197c-2.924 2.924-2.924 7.682 0 10.606a7.472 7.472 0 0 0 5.3 2.192c1.924 0 3.85-.734 5.317-2.202l6.903-7.096A1 1 0 0 0 21 11h-3.301l4.175-7.514a1.001 1.001 0 0 0-1.359-1.36l-7.11 3.95.576-2.879a1.002 1.002 0 0 0-.474-1.059zM14 14.5a4.5 4.5 0 0 1-9 0c0-1.57.807-2.949 2.025-3.754-.01.084-.025.167-.025.254a2 2 0 1 0 3.845-.772C12.669 10.802 14 12.486 14 14.5z"/></svg>`;
}
