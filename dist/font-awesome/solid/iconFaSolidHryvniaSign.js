/*@__PURE__*/
export function iconFaSolidHryvniaSign(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M121.9 116.2C138.3 103.1 158.7 96 179.6 96H223c27.1 0 49 21.9 49 49c0 11.5-4 22.4-11.1 31H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H155.5l-50.6 28.9c-1.7 1-3.4 2-5.1 3.1H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H52.3c-2.8 9.9-4.3 20.4-4.3 31c0 62.4 50.6 113 113 113h43.4c35.5 0 70-12.1 97.7-34.3L308 441c13.8-11 16-31.2 5-45s-31.2-16-45-5l-5.9 4.7c-16.4 13.1-36.7 20.2-57.7 20.2H161c-27.1 0-49-21.9-49-49c0-11.5 4-22.4 11.1-31H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H228.5l50.6-28.9c1.7-1 3.4-2 5.1-3.1H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H331.7c2.8-10 4.3-20.4 4.3-31c0-62.4-50.6-113-113-113H179.6c-35.5 0-70 12.1-97.7 34.3L76 71c-13.8 11-16 31.2-5 45s31.2 16 45 5l5.9-4.7z"/></svg>`;
}
