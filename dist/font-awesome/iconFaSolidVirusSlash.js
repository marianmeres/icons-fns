export function iconFaSolidVirusSlash(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-154.3-121c-2-30.1 20.8-60.1 56-60.1H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H532.5c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C412.3 118.4 352 93.4 352 43.5V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V43.5c0 49.9-60.3 74.9-95.6 39.6L184.2 75c-12.5-12.5-32.8-12.5-45.3 0c-1.6 1.6-3.1 3.4-4.3 5.3L38.8 5.1zm225.8 177c6.9-3.9 14.9-6.1 23.4-6.1c26.5 0 48 21.5 48 48c0 4.4-.6 8.7-1.7 12.7l-69.7-54.6zM402 412.7L144.7 210c-9.5 8.5-22.2 14-37.2 14H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h11.5c49.9 0 74.9 60.3 39.6 95.6l-8.2 8.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V468.5c0-31.2 23.6-52.7 50-55.7z"/></svg>`;
}
