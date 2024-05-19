export function iconFaSolidFrancSign(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 320 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M80 32C62.3 32 48 46.3 48 64V224v96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48v64c0 17.7 14.3 32 32 32s32-14.3 32-32V384h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V256H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>`;
}
