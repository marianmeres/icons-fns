/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidSleigh(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96V256c0 53 43 96 96 96v32h64V352H384v32h64V352c53 0 96-43 96-96V160c17.7 0 32-14.3 32-32s-14.3-32-32-32H512 480c-17.7 0-32 14.3-32 32v41.3c0 30.2-24.5 54.7-54.7 54.7c-75.5 0-145.6-38.9-185.6-102.9l-4.3-6.9C174.2 67.6 125 37.6 70.7 32.7c-2.2-.5-4.4-.7-6.7-.7H55 32zM640 384c0-17.7-14.3-32-32-32s-32 14.3-32 32v8c0 13.3-10.7 24-24 24H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H552c48.6 0 88-39.4 88-88v-8z"/></svg>`;
}
