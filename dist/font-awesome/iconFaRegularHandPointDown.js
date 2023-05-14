export function iconFaRegularHandPointDown(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M64 448l0-177.6c5.2 1 10.5 1.6 16 1.6l16 0 0 32 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16zM80 224c-17.7 0-32-14.3-32-32c0 0 0 0 0 0l0-24c0-66.3 53.7-120 120-120l48 0c52.5 0 97.1 33.7 113.4 80.7c-3.1-.5-6.2-.7-9.4-.7c-20 0-37.9 9.2-49.7 23.6c-9-4.9-19.4-7.6-30.3-7.6c-15.1 0-29 5.3-40 14c-11-8.8-24.9-14-40-14l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40 0-40 0zM0 192s0 0 0 0c0 18 6 34.6 16 48l0 208c0 35.3 28.7 64 64 64s64-28.7 64-64l0-82c5.1 1.3 10.5 2 16 2c25.3 0 47.2-14.7 57.6-36c7 2.6 14.5 4 22.4 4c20 0 37.9-9.2 49.7-23.6c9 4.9 19.4 7.6 30.3 7.6c35.3 0 64-28.7 64-64l0-64 0-24C384 75.2 308.8 0 216 0L168 0C75.2 0 0 75.2 0 168l0 24zm336 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64zM160 272c5.5 0 10.9-.7 16-2l0 2 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32 16 0zm64-24l0-40c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-24z"/></svg>`;
}
