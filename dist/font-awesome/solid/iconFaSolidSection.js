export function iconFaSolidSection(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M64.9 96C67.1 84.4 73.7 76.2 86 70.6c13.8-6.2 34.8-8.9 61.2-4.5c8.8 1.4 36.1 7.1 44.1 9.3c17 4.8 34.7-5.1 39.5-22.2s-5.1-34.7-22.2-39.5c-11.1-3.1-41-9.2-50.9-10.8C123-2.7 88.3-.6 59.7 12.3C29.9 25.8 7.5 50.9 1.6 86.5c-.1 .5-.2 1.1-.2 1.6c-2.2 19.7 .3 37.9 8.1 54.1c7.7 16.1 19.4 28 32 36.9c.6 .5 1.3 .9 2 1.4C22.3 194.2 6.5 215.1 1.7 243c-.1 .6-.2 1.1-.2 1.7c-2.3 19.3 .4 37.1 8.4 53c7.9 15.6 19.8 27 32.3 35.5c22.4 15.2 51.9 24 75.4 31l0 0 3.7 1.1c27.2 8.2 46.9 14.6 59.4 23.8c5.5 4 8.2 7.6 9.5 10.9c1.3 3.2 2.6 8.6 .9 18.1c-1.7 10.1-7.7 18-20.7 23.5c-14 6-35.4 8.5-62 4.4c-12.8-2.1-35.1-9.7-54.1-16.2l0 0c-4.3-1.5-8.5-2.9-12.3-4.2C25.3 420 7.2 429.1 1.6 445.8s3.5 34.9 20.3 40.5c2.6 .8 5.7 1.9 9.2 3.1c18.6 6.3 48.5 16.6 67.3 19.6l0 0 .2 0c34.5 5.4 68.8 3.4 97.2-8.7c29.4-12.6 52.5-36.5 58.5-71.5c3.3-19.3 1.9-37.4-5-53.9c-6.3-15-16.4-26.4-27.6-35.2c16.5-13.9 28.5-33.2 32.6-58.2c3.2-19.8 1.9-38.3-4.8-55.1c-6.7-16.8-17.8-29.4-30.2-39c-22.8-17.6-53.6-27.4-77.7-35l-1.4-.5c-27.4-8.7-47.8-15.3-61.5-25c-6.1-4.4-9.5-8.5-11.4-12.4c-1.8-3.7-3.2-9.3-2.3-18.5zm76.7 208.5c-.2-.1-.4-.1-.6-.2l-1.4-.4c-27.4-8.2-47.9-14.5-61.7-23.8c-6.2-4.2-9.3-7.9-11-11.3c-1.5-3-2.9-7.7-2.1-15.7c1.9-9.7 7.9-17.3 20.5-22.7c14-6 35.4-8.5 62.1-4.3l16.4 2.6c6.3 2.9 11.7 6 16.2 9.5c5.5 4.2 8.4 8.2 10 12.2c1.6 4 2.8 10.4 1.1 20.9c-2.4 14.7-12.8 26.4-37.1 31l-12.4 2.3z"/></svg>`;
}
