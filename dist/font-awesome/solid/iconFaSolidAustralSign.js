export function iconFaSolidAustralSign(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M253.5 51.7C248.6 39.8 236.9 32 224 32s-24.6 7.8-29.5 19.7L122.7 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96L82.7 320H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H56L34.5 435.7c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L125.3 384H322.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8L392 384h24c17.7 0 32-14.3 32-32s-14.3-32-32-32H365.3L352 288h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H325.3L253.5 51.7zM256 224H192l32-76.8L256 224zm-90.7 64H282.7L296 320H152l13.3-32z"/></svg>`;
}
