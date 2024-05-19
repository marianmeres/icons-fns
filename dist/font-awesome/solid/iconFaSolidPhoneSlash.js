export function iconFaSolidPhoneSlash(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M601.2 5.1c10.4-8.2 25.5-6.3 33.7 4.1s6.3 25.5-4.1 33.7l-592 464c-10.4 8.2-25.5 6.3-33.7-4.1s-6.3-25.5 4.1-33.7l155.6-122C101.8 270 64 171.4 64 64c0-18 12.1-33.8 29.5-38.6l88-24c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L208 207.3c12 25.5 27.2 49.2 45 70.7L601.2 5.1zM234.3 415.6l91.3-72c13.7 9.1 28 17.3 43 24.3L409 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C545.8 499.9 530 512 512 512c-104.9 0-201.3-36-277.7-96.4z"/></svg>`;
}
