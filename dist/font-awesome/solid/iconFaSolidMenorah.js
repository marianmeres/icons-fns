/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidMenorah(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M20.8 7.4C22.8 2.9 27.1 0 32 0s9.2 2.9 11.2 7.4L61.3 49.7c1.8 4.1 2.7 8.6 2.7 13.1V64c0 17.7-14.3 32-32 32S0 81.7 0 64V62.8c0-4.5 .9-8.9 2.7-13.1L20.8 7.4zm96 0C118.8 2.9 123.1 0 128 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1V64c0 17.7-14.3 32-32 32s-32-14.3-32-32V62.8c0-4.5 .9-8.9 2.7-13.1L116.8 7.4zm77.8 42.4L212.8 7.4C214.8 2.9 219.1 0 224 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1V64c0 17.7-14.3 32-32 32s-32-14.3-32-32V62.8c0-4.5 .9-8.9 2.7-13.1zM308.8 7.4C310.8 2.9 315.1 0 320 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1V64c0 17.7-14.3 32-32 32s-32-14.3-32-32V62.8c0-4.5 .9-8.9 2.7-13.1L308.8 7.4zm77.8 42.4L404.8 7.4C406.8 2.9 411.1 0 416 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1V64c0 17.7-14.3 32-32 32s-32-14.3-32-32V62.8c0-4.5 .9-8.9 2.7-13.1zM500.8 7.4C502.8 2.9 507.1 0 512 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1V64c0 17.7-14.3 32-32 32s-32-14.3-32-32V62.8c0-4.5 .9-8.9 2.7-13.1L500.8 7.4zm77.8 42.4L596.8 7.4C598.8 2.9 603.1 0 608 0s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1V64c0 17.7-14.3 32-32 32s-32-14.3-32-32V62.8c0-4.5 .9-8.9 2.7-13.1zM32 128c17.7 0 32 14.3 32 32V288c0 17.7 14.3 32 32 32H288V160c0-17.7 14.3-32 32-32s32 14.3 32 32V320H544c17.7 0 32-14.3 32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32V288c0 53-43 96-96 96H352v64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V384H96c-53 0-96-43-96-96V160c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32v96 32H96V256 160c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32v96 32H192V256 160c0-17.7 14.3-32 32-32zm192 0c17.7 0 32 14.3 32 32v96 32H384V256 160c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32v96 32H480V256 160c0-17.7 14.3-32 32-32z"/></svg>`;
}
