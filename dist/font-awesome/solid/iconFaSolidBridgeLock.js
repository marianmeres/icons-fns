/*@__PURE__*/
export function iconFaSolidBridgeLock(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M32 64c0-17.7 14.3-32 32-32H576c17.7 0 32 14.3 32 32s-14.3 32-32 32H536v64h-8c-61.9 0-112 50.1-112 112v24.6c-9.9 5.8-18.2 14.1-23.8 24.1c-17.6-20-43.4-32.7-72.2-32.7c-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V384c0-53-43-96-96-96V160h72V96H64C46.3 96 32 81.7 32 64zM408 96v64h80V96H408zm-48 64V96H280v64h80zM152 96v64h80V96H152zM528 240c-17.7 0-32 14.3-32 32v48h64V272c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32V272z"/></svg>`;
}
