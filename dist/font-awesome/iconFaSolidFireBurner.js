export function iconFaSolidFireBurner(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M293.5 3.8c19.7 17.8 38.2 37 55.5 57.7c7.9-9.9 16.8-20.7 26.5-29.5c5.6-5.1 14.4-5.1 20 0c24.7 22.7 45.6 52.7 60.4 81.1c14.5 28 24.2 58.8 24.2 79C480 280 408.7 352 320 352c-89.7 0-160-72.1-160-159.8c0-26.4 12.7-60.7 32.4-92.6c20-32.4 48.1-66.1 81.4-95.8c2.8-2.5 6.4-3.8 10-3.7c3.5 0 7 1.3 9.8 3.8zM370 273c30-21 38-63 20-96c-2-4-4-8-7-12l-36 42s-58-74-62-79c-30 37-45 58-45 82c0 49 36 78 81 78c18 0 34-5 49-15zM32 288c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32s-14.3 32-32 32v64H544V320c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32V288zM320 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;
}