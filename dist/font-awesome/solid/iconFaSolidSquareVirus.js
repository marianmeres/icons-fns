export function iconFaSolidSquareVirus(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM223.8 93.7c13.3 0 24 10.7 24 24c0 29.3 35.4 43.9 56.1 23.2c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-20.7 20.7-6 56.1 23.2 56.1c13.3 0 24 10.7 24 24s-10.7 24-24 24c-29.3 0-43.9 35.4-23.2 56.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-20.7-20.7-56.1-6-56.1 23.2c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-29.3-35.4-43.9-56.1-23.2c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c20.7-20.7 6-56.1-23.2-56.1c-13.3 0-24-10.7-24-24s10.7-24 24-24c29.3 0 43.9-35.4 23.2-56.1c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c20.7 20.7 56.1 6 56.1-23.2c0-13.3 10.7-24 24-24zM192 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm88 32a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>`;
}
