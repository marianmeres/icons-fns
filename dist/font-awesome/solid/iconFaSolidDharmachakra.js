export function iconFaSolidDharmachakra(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M337.8 205.7l48.6-42.5c13.8 19.3 23.4 41.9 27.4 66.2l-64.4 4.3c-2.4-10.1-6.4-19.5-11.6-28zm140.1 19.5c-5.3-38.8-20.6-74.5-43.2-104.3l.8-.7C449 108.4 449.7 87.6 437 75s-33.4-12-45.2 1.5l-.7 .8c-29.8-22.6-65.5-37.9-104.3-43.2l.1-1.1c1.2-17.9-13-33-30.9-33s-32.1 15.2-30.9 33l.1 1.1c-38.8 5.3-74.5 20.6-104.3 43.2l-.7-.8C108.4 63 87.6 62.3 75 75s-12 33.4 1.5 45.2l.8 .7c-22.6 29.8-37.9 65.5-43.2 104.3l-1.1-.1c-17.9-1.2-33 13-33 30.9s15.2 32.1 33 30.9l1.1-.1c5.3 38.8 20.6 74.5 43.2 104.3l-.8 .7C63 403.6 62.3 424.4 75 437s33.4 12 45.2-1.5l.7-.8c29.8 22.6 65.5 37.9 104.3 43.2l-.1 1.1c-1.2 17.9 13 33 30.9 33s32.1-15.2 30.9-33l-.1-1.1c38.8-5.3 74.5-20.6 104.3-43.2l.7 .8c11.8 13.5 32.5 14.2 45.2 1.5s12-33.4-1.5-45.2l-.8-.7c22.6-29.8 37.9-65.5 43.2-104.3l1.1 .1c17.9 1.2 33-13 33-30.9s-15.2-32.1-33-30.9l-1.1 .1zM163.2 125.6c19.3-13.8 41.9-23.4 66.2-27.5l4.3 64.4c-10 2.4-19.5 6.4-28 11.6l-42.5-48.6zm-65 103.8c4.1-24.4 13.7-46.9 27.5-66.2l48.6 42.5c-5.3 8.5-9.2 18-11.6 28l-64.4-4.3zm27.5 119.4c-13.8-19.3-23.4-41.9-27.5-66.2l64.4-4.3c2.4 10 6.4 19.5 11.6 28l-48.6 42.5zm103.8 65c-24.4-4.1-46.9-13.7-66.2-27.4l42.5-48.6c8.5 5.3 18 9.2 28 11.6l-4.3 64.4zm119.4-27.4c-19.3 13.8-41.9 23.4-66.2 27.4l-4.3-64.4c10-2.4 19.5-6.4 28-11.6l42.5 48.6zm65-103.8c-4.1 24.4-13.7 46.9-27.4 66.2l-48.6-42.5c5.3-8.5 9.2-18 11.6-28l64.4 4.3zm-65-156.9l-42.5 48.6c-8.5-5.3-18-9.2-28-11.6l4.3-64.4c24.4 4.1 46.9 13.7 66.2 27.5zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`;
}
