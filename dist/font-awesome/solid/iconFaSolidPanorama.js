export function iconFaSolidPanorama(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M45.6 32C20.4 32 0 52.4 0 77.6V434.4C0 459.6 20.4 480 45.6 480c5.1 0 10-.8 14.7-2.4C74.6 472.8 177.6 440 320 440s245.4 32.8 259.6 37.6c4.7 1.6 9.7 2.4 14.7 2.4c25.2 0 45.6-20.4 45.6-45.6V77.6C640 52.4 619.6 32 594.4 32c-5 0-10 .8-14.7 2.4C565.4 39.2 462.4 72 320 72S74.6 39.2 60.4 34.4C55.6 32.8 50.7 32 45.6 32zM96 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm272 0c7.9 0 15.4 3.9 19.8 10.5L512.3 353c5.4 8 5.6 18.4 .4 26.5s-14.7 12.3-24.2 10.7C442.7 382.4 385.2 376 320 376c-65.6 0-123.4 6.5-169.3 14.4c-9.8 1.7-19.7-2.9-24.7-11.5s-4.3-19.4 1.9-27.2L197.3 265c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l26.4 33.1 87-127.6c4.5-6.6 11.9-10.5 19.8-10.5z"/></svg>`;
}
