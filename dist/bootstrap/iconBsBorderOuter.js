export function iconBsBorderOuter(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M7.5 1.906v.938h1v-.938zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938zM1.906 8.5h.938v-1h-.938zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5zm.937 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zM7.5 9.406v.938h1v-.938zm0 1.875v.938h1v-.938zm0 1.875v.938h1v-.938z"/><path d="M0 0v16h16V0zm1 1h14v14H1z"/></svg>`;
}
