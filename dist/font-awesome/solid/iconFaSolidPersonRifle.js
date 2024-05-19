export function iconFaSolidPersonRifle(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M265.2 192c25.4 0 49.8 7.1 70.8 19.9V512H144V337.7L90.4 428.3c-11.2 19-35.8 25.3-54.8 14.1s-25.3-35.8-14.1-54.8L97.7 258.8c24.5-41.4 69-66.8 117.1-66.8h50.4zM160 80a80 80 0 1 1 160 0A80 80 0 1 1 160 80zM448 0c8.8 0 16 7.2 16 16V132.3c9.6 5.5 16 15.9 16 27.7V269.3l16-5.3V208c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v84.5c0 6.9-4.4 13-10.9 15.2L480 325.3V352h48c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H484l23 92.1c2.5 10.1-5.1 19.9-15.5 19.9H432c-8.8 0-16-7.2-16-16V400H400c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32V160c0-11.8 6.4-22.2 16-27.7V32c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 16z"/></svg>`;
}
