export function iconFaSolidBottleWater(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M120 0h80c13.3 0 24 10.7 24 24V64H96V24c0-13.3 10.7-24 24-24zM32 151.7c0-15.6 9-29.8 23.2-36.5l24.4-11.4c11-5.1 23-7.8 35.1-7.8h90.6c12.1 0 24.1 2.7 35.1 7.8l24.4 11.4c14.1 6.6 23.2 20.8 23.2 36.5c0 14.4-7.5 27-18.9 34.1c11.5 8.8 18.9 22.6 18.9 38.2c0 16.7-8.5 31.4-21.5 40c12.9 8.6 21.5 23.3 21.5 40s-8.5 31.4-21.5 40c12.9 8.6 21.5 23.3 21.5 40s-8.5 31.4-21.5 40c12.9 8.6 21.5 23.3 21.5 40c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48c0-16.7 8.5-31.4 21.5-40C40.5 415.4 32 400.7 32 384s8.5-31.4 21.5-40C40.5 335.4 32 320.7 32 304s8.5-31.4 21.5-40C40.5 255.4 32 240.7 32 224c0-15.6 7.4-29.4 18.9-38.2C39.5 178.7 32 166.1 32 151.7zM96 240c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"/></svg>`;
}
