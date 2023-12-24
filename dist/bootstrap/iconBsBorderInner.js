export function iconBsBorderInner(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M.969 0H0v.969h.5V1h.469V.969H1V.5H.969zm.937 1h.938V0h-.938v1zm1.875 0h.938V0H3.78v1zm1.875 0h.938V0h-.938v1"/><path d="M8.5 7.5H16v1H8.5V16h-1V8.5H0v-1h7.5V0h1z"/><path d="M9.406 1h.938V0h-.938zm1.875 0h.938V0h-.938zm1.875 0h.938V0h-.938zm1.875 0h.469V.969h.5V0h-.969v.5H15v.469h.031zM1 2.844v-.938H0v.938zm14-.938v.938h1v-.938zM1 4.719V3.78H0v.938h1zm14-.938v.938h1V3.78h-1zM1 6.594v-.938H0v.938zm14-.938v.938h1v-.938h-1M0 9.406v.938h1v-.938zm16 .938v-.938h-1v.938h1m-16 .937v.938h1v-.938zm16 .938v-.938h-1v.938h1m-16 .937v.938h1v-.938zm16 .938v-.938h-1v.938h1M0 16h.969v-.5H1v-.469H.969V15H.5v.031H0zm1.906 0h.938v-1h-.938zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938zm3.75 0h.938v-1h-.938v1m1.875 0h.938v-1h-.938v1m1.875 0h.938v-1h-.938v1m1.875-.5v.5H16v-.969h-.5V15h-.469v.031H15v.469z"/></svg>`;
}
