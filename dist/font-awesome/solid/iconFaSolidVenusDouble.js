export function iconFaSolidVenusDouble(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M192 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM368 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H224v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1C78.1 334.1 16 262.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176zM344 318c14.6-15.6 26.8-33.4 36-53c18.8 14.4 42.4 23 68 23c61.9 0 112-50.1 112-112s-50.1-112-112-112c-25.6 0-49.1 8.6-68 23c-9.3-19.5-21.5-37.4-36-53C373.1 12.6 409.1 0 448 0c97.2 0 176 78.8 176 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H480v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1c-26.6-4.9-51.1-15.7-72-31.1z"/></svg>`;
}