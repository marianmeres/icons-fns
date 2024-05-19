/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidTruckFieldUn(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M96 32C60.7 32 32 60.7 32 96v32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32v32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288c0-35.3-28.7-64-64-64h-4.2c-.4-1.1-.9-2.1-1.3-3.2L485.7 102c-10.3-23.1-33.2-38-58.5-38H375.4C364.4 44.9 343.7 32 320 32H96zm288 96h43.2l42.7 96H384V128zM112 384a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM253.3 135.1l34.7 52V144c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4zM128 144v64c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16v64c0 26.5-21.5 48-48 48s-48-21.5-48-48V144c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>`;
}
