/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidMosquitoNet(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M168.8 462.3c-7.9-4-11.1-13.6-7.2-21.5L192 380.2l0-44.2c0-4.2 1.7-8.3 4.7-11.3L256 265.4V242.2L139.2 344C87.8 395.3 0 358.9 0 286.3c0-41.1 30.6-75.8 71.4-80.9l159.9-23.9-49.6-41.3c-5.1-4.2-7-11.1-4.9-17.4l13.9-41.7-29-58.1c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2l32 64c1.9 3.8 2.2 8.2 .9 12.2l-12.5 37.6L256 160.5V137.9c0-14.9 10.1-27.3 23.8-31V63.7c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2V107c13.7 3.6 23.8 16.1 23.8 31v22.6l45.4-37.8L352.8 85.1c-1.3-4-1-8.4 .9-12.2l32-64c4-7.9 13.6-11.1 21.5-7.2s11.1 13.6 7.2 21.5l-29 58.1 13.9 41.7c2.1 6.2 .1 13.1-4.9 17.4l-49.6 41.3 159.9 23.9c22.5 2.8 41.8 14.6 54.7 31.4c-2.7 2.6-5.2 5.4-7.3 8.6c-8.6-12.9-23.3-21.5-40-21.5s-31.4 8.5-40 21.5c-8.6-12.9-23.3-21.5-40-21.5c-21.7 0-40 14.3-45.9 34.1c-10.7 3.2-19.8 10.1-25.9 19.2l-40.2-35v23.1l32.4 32.4c-.3 2-.4 4.1-.4 6.2c0 16.7 8.5 31.4 21.5 40c-4 2.6-7.5 5.9-10.6 9.5L320 310.6v50c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50l-32 32 0 41.4c0 2.5-.6 4.9-1.7 7.2l-32 64c-4 7.9-13.6 11.1-21.5 7.2zM512 256c8.8 0 16 7.2 16 16v16h48V272c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H608v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H608v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H608v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V480H528v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V480H448v16c0 8.8-7.2 16-16 16s-16-7.2-16-16V480H400c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V400H400c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V320H400c-8.8 0-16-7.2-16-16s7.2-16 16-16h16V272c0-8.8 7.2-16 16-16s16 7.2 16 16v16h48V272c0-8.8 7.2-16 16-16zm16 112h48V320H528v48zm0 80h48V400H528v48zM448 320v48h48V320H448zm0 80v48h48V400H448z"/></svg>`;
}
