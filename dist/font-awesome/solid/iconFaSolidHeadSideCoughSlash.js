export function iconFaSolidHeadSideCoughSlash(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M448 325.8l44 34.5c8.1 1.4 14.8 6.8 18 14.1L552.9 408c10.6 .4 19.5 7.6 22.2 17.4l39.1 30.6c.6 0 1.2-.1 1.8-.1c11.1 0 20.4 7.5 23.2 17.8h-3.9c6.2 8.5 6.4 20.4-.4 29c-8.2 10.4-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1L89.6 44.9C127 16.7 173.5 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v0 5.8zM0 224.2c0-38.7 9.8-75.1 27.1-106.9L341.8 365.3l-2.5 .3c-11 1.4-19.2 10.7-19.2 21.8c0 11.6 9 21.2 20.6 21.9l62 3.9 43 33.9C439.3 466.2 421.2 480 400 480H320v8c0 13.3-10.7 24-24 24H256v0H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM616 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-64-48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40-24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>`;
}
