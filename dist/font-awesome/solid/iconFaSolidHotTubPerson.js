export function iconFaSolidHotTubPerson(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M272 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5V200c0 13.3 10.7 24 24 24s24-10.7 24-24V186.8c0-34-14.4-66.4-39.7-89.2L295.8 82.8C280.7 69.1 272 49.7 272 29.2V24zM0 320v16V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H277.3c-13.8 0-27.3-4.5-38.4-12.8l-85.3-64C137 166.7 116.8 160 96 160c-53 0-96 43-96 96v64zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16zm80-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm112 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16s16 7.2 16 16zm80-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V336c0-8.8 7.2-16 16-16zM360 0c-13.3 0-24 10.7-24 24v5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5V200c0 13.3 10.7 24 24 24s24-10.7 24-24V186.8c0-34-14.4-66.4-39.7-89.2L407.8 82.8C392.7 69.1 384 49.7 384 29.2V24c0-13.3-10.7-24-24-24zM64 128A64 64 0 1 0 64 0a64 64 0 1 0 0 128z"/></svg>`;
}
