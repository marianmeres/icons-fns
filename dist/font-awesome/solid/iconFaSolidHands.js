/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidHands(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M544 160l-.1 72.6c-.1 52.2-24 101-64 133.1c.1-1.9 .1-3.8 .1-5.7v-8c0-71.8-37-138.6-97.9-176.7l-60.2-37.6c-8.6-5.4-17.9-8.4-27.3-9.4L248.7 48.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8l78 135.1c3.3 5.7 10.7 7.7 16.4 4.4s7.7-10.7 4.4-16.4l-62-107.4c-6.6-11.5-2.7-26.2 8.8-32.8S362 5 368.6 16.5l68 117.8 0 0 0 0 43.3 75L480 160c0-17.7 14.4-32 32-32s32 14.4 32 32zM243.9 88.5L268.5 131c-13.9 4.5-26.4 13.7-34.7 27c-.9 1.4-1.7 2.9-2.5 4.4l-28.9-50c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zm-46.4 63.7l26.8 46.4c.6 6 2.1 11.8 4.3 17.4H224 210.7l0 0H179l-23-39.8c-6.6-11.5-2.7-26.2 8.8-32.8s26.2-2.7 32.8 8.8zM260.9 175c9.4-15 29.1-19.5 44.1-10.2l60.2 37.6C416.7 234.7 448 291.2 448 352v8c0 83.9-68.1 152-152 152H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h92c6.6 0 12-5.4 12-12s-5.4-12-12-12H88c-13.3 0-24-10.7-24-24s10.7-24 24-24H212c6.6 0 12-5.4 12-12s-5.4-12-12-12H56c-13.3 0-24-10.7-24-24s10.7-24 24-24H212c6.6 0 12-5.4 12-12s-5.4-12-12-12H88c-13.3 0-24-10.7-24-24s10.7-24 24-24H224l0 0 0 0h93.2L271 219.1c-15-9.4-19.5-29.1-10.2-44.1z"/></svg>`;
}
