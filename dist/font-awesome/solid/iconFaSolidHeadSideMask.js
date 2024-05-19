export function iconFaSolidHeadSideMask(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M32 224.2c0-22.2 3.2-43.6 9.2-63.9L262.2 321c-4 9.5-6.2 20-6.2 31V512H128c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C48.6 322.4 32 274.1 32 224.2zm248.3 70.4L53 129.3C88.7 53 166.2 0 256 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c5.4 6.7 8.6 14.8 9.4 23.2H336c-21.7 0-41.3 8.6-55.7 22.6zM336 304H534l0 0h10l-19.7 64H368c-8.8 0-16 7.2-16 16s7.2 16 16 16H514.5l-9.8 32H368c-8.8 0-16 7.2-16 16s7.2 16 16 16H494.8l-.9 2.8c-8.3 26.9-33.1 45.2-61.2 45.2H288V352c0-14 6-26.7 15.6-35.4c0 0 0 0 0 0c8.5-7.8 19.9-12.6 32.4-12.6zm48-80a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;
}
