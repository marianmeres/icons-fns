/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidMarsStroke(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M376 0c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l33.4 33.4L370.3 96.4 345 71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l25.4 25.4L307.8 159c-28.4-19.5-62.7-31-99.8-31c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l28.6-28.6L407 201c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-25.4-25.4 22.1-22.1L471 153c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V24c0-13.3-10.7-24-24-24H376zm88 48h0v0l0 0zM96 304a112 112 0 1 1 224 0A112 112 0 1 1 96 304z"/></svg>`;
}
