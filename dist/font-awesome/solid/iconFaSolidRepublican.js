export function iconFaSolidRepublican(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M0 192C0 103.6 71.6 32 160 32H384c88.4 0 160 71.6 160 160v64H0V192zm415.9-64c-2.4 0-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L466 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4zm-138.3 3.4c-1.1-2.1-3.3-3.4-5.7-3.4s-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L322 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6zM127.9 128c-2.4 0-4.7 1.3-5.7 3.4l-12.6 24.6-28.2 4c-2.4 .3-4.4 2-5.2 4.2s-.1 4.7 1.6 6.3l20.4 19.2-4.8 27.1c-.4 2.3 .6 4.7 2.5 6s4.6 1.6 6.7 .5l25.2-12.8 25.2 12.8c2.2 1.1 4.8 .9 6.7-.5s3-3.7 2.5-6l-4.8-27.1L178 170.5c1.7-1.6 2.4-4.1 1.6-6.3s-2.8-3.9-5.2-4.2l-28.2-4-12.6-24.6c-1.1-2.1-3.3-3.4-5.7-3.4zm.1 160H320h96 32 64 32v32 80c0 8.8 7.2 16 16 16s16-7.2 16-16V352c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80s-80-35.8-80-80V352H448v32 64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V384H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V384 288H128z"/></svg>`;
}
