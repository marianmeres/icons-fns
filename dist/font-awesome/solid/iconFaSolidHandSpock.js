export function iconFaSolidHandSpock(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M246.9 23.7C242.3 6.6 224.8-3.5 207.7 1.1s-27.2 22.1-22.6 39.2L238 237.8c2.5 9.2-4.5 18.2-14 18.2c-6.4 0-12-4.2-13.9-10.3L166.6 102.7c-5.1-16.9-23-26.4-39.9-21.3s-26.4 23-21.3 39.9l62.8 206.4c2.4 7.9-7.2 13.8-13.2 8.1L99.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L156.8 448c43.1 41.1 100.4 64 160 64h10.9 8.2c.1 0 .1-.1 .1-.1s.1-.1 .1-.1c58.3-3.5 108.6-43.2 125.3-99.7l81.2-275c5-16.9-4.7-34.7-21.6-39.8s-34.7 4.7-39.8 21.6L443.5 247.1c-1.6 5.3-6.4 8.9-12 8.9c-7.9 0-13.8-7.3-12.2-15.1l36-170.3c3.7-17.3-7.4-34.3-24.7-37.9s-34.3 7.4-37.9 24.7L355.1 235.1c-2.6 12.2-13.3 20.9-25.8 20.9c-11.9 0-22.4-8-25.4-19.5l-57-212.8z"/></svg>`;
}