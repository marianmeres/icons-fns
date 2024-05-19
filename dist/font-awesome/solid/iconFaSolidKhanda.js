export function iconFaSolidKhanda(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M245.8 3.7c5.9-4.9 14.6-4.9 20.5 0l48 40c5.9 4.9 7.5 13.2 3.8 19.9l0 0 0 0 0 0 0 0-.1 .1-.3 .6c-.3 .5-.7 1.3-1.2 2.3c-1 2-2.6 5-4.4 8.6c-.5 .9-.9 1.9-1.4 2.9C344.9 97.4 368 134 368 176s-23.1 78.6-57.3 97.8c.5 1 1 2 1.4 2.9c1.8 3.7 3.3 6.6 4.4 8.6c.5 1 .9 1.8 1.2 2.3l.3 .6 .1 .1 0 0 0 0c3.6 6.7 2 15-3.8 19.9L272 343.5v19.8l35.6-24.5 41.1-28.2c42.8-29.4 68.4-78 68.4-130c0-31.1-9.2-61.6-26.5-87.5l-2.8-4.2c-4-6-3.5-14 1.3-19.5s12.7-7 19.2-3.7L401.1 80c7.2-14.3 7.2-14.3 7.2-14.3l0 0 0 0 .1 0 .3 .2 1 .5c.8 .4 2 1.1 3.5 1.9c2.9 1.7 7 4.1 11.8 7.3c9.6 6.4 22.5 16.1 35.4 29c25.7 25.7 52.7 65.6 52.7 119.3c0 53.1-26.4 100.5-51.2 133.6c-12.6 16.7-25.1 30.3-34.5 39.7c-4.7 4.7-8.7 8.4-11.5 10.9c-1.4 1.3-2.5 2.2-3.3 2.9l-.9 .8-.3 .2-.1 .1 0 0 0 0s0 0-10.2-12.3l10.2 12.3c-5.1 4.3-12.4 4.9-18.2 1.6l-75.6-43-32.7 22.5 45.5 31.3c1.8-.4 3.7-.7 5.7-.7c13.3 0 24 10.7 24 24s-10.7 24-24 24c-12.2 0-22.3-9.1-23.8-21L272 423.4v28.9c9.6 5.5 16 15.9 16 27.7c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-11.8 6.4-22.2 16-27.7V424.1l-40.3 27.7C197.8 463.3 187.9 472 176 472c-13.3 0-24-10.7-24-24s10.7-24 24-24c2.2 0 4.4 .3 6.5 .9l45.8-31.5-32.7-22.5-75.6 43c-5.8 3.3-13 2.7-18.2-1.6L112 400c-10.2 12.3-10.2 12.3-10.3 12.3l0 0 0 0-.1-.1-.3-.2-.9-.8c-.8-.7-1.9-1.7-3.3-2.9c-2.8-2.5-6.7-6.2-11.5-10.9c-9.4-9.4-21.9-23-34.5-39.7C26.4 324.5 0 277.1 0 224c0-53.7 26.9-93.6 52.7-119.3c12.9-12.9 25.8-22.6 35.4-29C93 72.5 97 70 99.9 68.4c1.5-.8 2.6-1.5 3.5-1.9l1-.5 .3-.2 .1 0 0 0 0 0s0 0 7.2 14.3l-7.2-14.3c6.5-3.2 14.3-1.7 19.2 3.7s5.3 13.4 1.3 19.5l-2.8 4.2C105.2 119 96 149.5 96 180.6c0 51.9 25.6 100.6 68.4 130l41.1 28.2L240 362.6V343.5l-42.2-35.2c-5.9-4.9-7.5-13.2-3.8-19.9l0 0 0 0 0 0 .1-.1 .3-.6c.3-.5 .7-1.3 1.2-2.3c1-2 2.6-5 4.4-8.6c.5-.9 .9-1.9 1.4-2.9C167.1 254.6 144 218 144 176s23.1-78.6 57.3-97.8c-.5-1-1-2-1.4-2.9c-1.8-3.7-3.3-6.6-4.4-8.6c-.5-1-.9-1.8-1.2-2.3l-.3-.6-.1-.1 0 0 0 0 0 0c-3.6-6.7-2-15 3.8-19.9l48-40zM220.2 122.9c-17 11.5-28.2 31-28.2 53.1s11.2 41.6 28.2 53.1C227 210.2 232 190.9 232 176s-5-34.2-11.8-53.1zm71.5 106.2c17-11.5 28.2-31 28.2-53.1s-11.2-41.6-28.2-53.1C285 141.8 280 161.1 280 176s5 34.2 11.8 53.1z"/></svg>`;
}
