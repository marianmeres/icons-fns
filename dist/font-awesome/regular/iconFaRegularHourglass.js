export function iconFaRegularHourglass(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48h8V67c0 40.3 16 79 44.5 107.5L158.1 256 76.5 337.5C48 366 32 404.7 32 445v19H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V445c0-40.3-16-79-44.5-107.5L225.9 256l81.5-81.5C336 146 352 107.3 352 67V48h8c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM192 289.9l81.5 81.5C293 391 304 417.4 304 445v19H80V445c0-27.6 11-54 30.5-73.5L192 289.9zm0-67.9l-81.5-81.5C91 121 80 94.6 80 67V48H304V67c0 27.6-11 54-30.5 73.5L192 222.1z"/></svg>`;
}
