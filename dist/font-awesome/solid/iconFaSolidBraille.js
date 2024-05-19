export function iconFaSolidBraille(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M0 96a64 64 0 1 1 128 0A64 64 0 1 1 0 96zM224 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM80 416a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zm240 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM64 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM224 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM352 96a64 64 0 1 1 128 0A64 64 0 1 1 352 96zm240 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0A64 64 0 1 1 512 96zm64 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm16 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM416 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm16 224a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-80 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>`;
}
