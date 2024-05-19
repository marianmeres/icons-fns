/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidHanukiah(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M314.2 3.3C309.1 12.1 296 36.6 296 56c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7C324.6 1.2 322.4 0 320 0s-4.6 1.2-5.8 3.3zm-288 48C21.1 60.1 8 84.6 8 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7C36.6 49.2 34.4 48 32 48s-4.6 1.2-5.8 3.3zM88 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7c-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3C101.1 60.1 88 84.6 88 104zm82.2-52.7C165.1 60.1 152 84.6 152 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7c-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3zM216 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7c-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3C229.1 60.1 216 84.6 216 104zM394.2 51.3C389.1 60.1 376 84.6 376 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7c-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3zM440 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7c-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3C453.1 60.1 440 84.6 440 104zm82.2-52.7C517.1 60.1 504 84.6 504 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7c-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3zM584 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-19.4-13.1-43.9-18.2-52.7c-1.2-2.1-3.4-3.3-5.8-3.3s-4.6 1.2-5.8 3.3C597.1 60.1 584 84.6 584 104zM112 160c-8.8 0-16 7.2-16 16v96 16h32V272 176c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v96 16h32V272 176c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v96 16h32V272 176c0-8.8-7.2-16-16-16zm160 0c-8.8 0-16 7.2-16 16v96 16h32V272 176c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v96 16h32V272 176c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16v96 16h32V272 176c0-8.8-7.2-16-16-16zM352 144c0-17.7-14.3-32-32-32s-32 14.3-32 32V320H96c-17.7 0-32-14.3-32-32V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 53 43 96 96 96H288v64H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H320 480c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V384H544c53 0 96-43 96-96V192c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H352V144z"/></svg>`;
}
