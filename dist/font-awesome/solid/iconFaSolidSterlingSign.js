export function iconFaSolidSterlingSign(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 320 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M112 160.4c0-35.5 28.8-64.4 64.4-64.4c6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48v44.5c0 17.4-4.7 34.5-13.7 49.4L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H88.5l.7-1.1C104.1 390 112 361.5 112 332.5V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V160.4z"/></svg>`;
}
