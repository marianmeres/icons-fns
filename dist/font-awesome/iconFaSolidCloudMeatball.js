export function iconFaSolidCloudMeatball(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M0 224c0 53 43 96 96 96h44.7c9.5-23.5 32.5-40 59.3-40c2 0 3.9 .1 5.8 .3C217.6 265.5 235.7 256 256 256s38.4 9.5 50.2 24.3c1.9-.2 3.9-.3 5.8-.3c26.9 0 49.9 16.5 59.3 40H416c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm288 96c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 1 .1 2.1 .1 3.1c-.7-.8-1.4-1.6-2.1-2.3c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3c.7 .7 1.5 1.4 2.3 2.1c-1-.1-2.1-.1-3.1-.1c-17.7 0-32 14.3-32 32s14.3 32 32 32c1 0 2.1-.1 3.1-.1c-.8 .7-1.6 1.3-2.3 2.1c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0c.7-.7 1.4-1.5 2.1-2.3c-.1 1-.1 2.1-.1 3.1c0 17.7 14.3 32 32 32s32-14.3 32-32c0-1-.1-2.1-.1-3.1c.7 .8 1.3 1.6 2.1 2.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3c-.7-.7-1.5-1.4-2.3-2.1c1 .1 2.1 .1 3.1 .1c17.7 0 32-14.3 32-32s-14.3-32-32-32c-1 0-2.1 .1-3.1 .1c.8-.7 1.6-1.3 2.3-2.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-.7 .7-1.4 1.5-2.1 2.3c.1-1 .1-2.1 .1-3.1zM48 448a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm416 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>`;
}
