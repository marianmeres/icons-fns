export function iconFaSolidFaceGrinBeamSweat(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M476.8 126.3c-4.1 1.1-8.4 1.7-12.8 1.7c-26.5 0-48-21-48-47c0-5 1.8-11.3 4.6-18.1c.3-.7 .6-1.4 .9-2.1c9-20.2 26.5-44.9 36-57.5c3.2-4.4 9.6-4.4 12.8 0C483.4 20.6 512 61 512 81c0 21.7-14.9 39.8-35.2 45.3zM256 0c51.4 0 99.3 15.2 139.4 41.2c-1.5 3.1-3 6.2-4.3 9.3c-3.4 8-7.1 19-7.1 30.5c0 44.3 36.6 79 80 79c9.6 0 18.8-1.7 27.4-4.8c13.3 30.9 20.6 65 20.6 100.8c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0zM388.1 312.8c-39.7 12.2-84.5 19-131.8 19s-92.1-6.8-131.8-19c-12.3-3.8-24.3 6.9-19.3 18.7c25 59.1 83.2 100.5 151.1 100.5s126.2-41.4 151.1-100.5c5-11.8-7-22.5-19.3-18.7zm-170.5-84l0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C126.7 188.4 120 206.1 120 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8l0 0 0 0 0 0 .2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2 0 0 0 0zm160 0l0 0 0 0 0 0c2.1 2.8 5.7 3.9 8.9 2.8s5.5-4.1 5.5-7.6c0-17.9-6.7-35.6-16.6-48.8c-9.8-13-23.9-23.2-39.4-23.2s-29.6 10.2-39.4 23.2C286.7 188.4 280 206.1 280 224c0 3.4 2.2 6.5 5.5 7.6s6.9 0 8.9-2.8l0 0 0 0 0 0 .2-.2c.2-.2 .4-.5 .7-.9c.6-.8 1.6-2 2.8-3.4c2.5-2.8 6-6.6 10.2-10.3c8.8-7.8 18.8-14 27.7-14s18.9 6.2 27.7 14c4.2 3.7 7.7 7.5 10.2 10.3c1.2 1.4 2.2 2.6 2.8 3.4c.3 .4 .6 .7 .7 .9l.2 .2 0 0z"/></svg>`;
}
