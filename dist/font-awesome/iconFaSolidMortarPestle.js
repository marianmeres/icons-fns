export function iconFaSolidMortarPestle(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M504.3 11.1C493.3-1.6 474.5-3.7 461 6.2L252.3 160H397.3L502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5zM32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 82.5 43.4 147.7 123.9 176.2c-11.1 13.9-19.4 30.3-23.9 48.1C127.6 497.4 142.3 512 160 512H352c17.7 0 32.4-14.6 28.1-31.7c-4.5-17.8-12.8-34.1-23.9-48.1C436.6 403.7 480 338.5 480 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>`;
}
