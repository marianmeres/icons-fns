export function iconFaSolidMarsAndVenusBurst(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M504 0c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l39 39-22.2 22.2C475.9 78.4 439.6 64 400 64c-88.4 0-160 71.6-160 160c0 80.2 59 146.6 136 158.2V408H352c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v32c0 13.3 10.7 24 24 24s24-10.7 24-24V456h24c13.3 0 24-10.7 24-24s-10.7-24-24-24H424V382.2c77-11.6 136-78 136-158.2c0-31.4-9-60.7-24.7-85.4L560 113.9l39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V24c0-13.3-10.7-24-24-24H504zM400 128a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM190.9 18.1C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-5.4 3.7-8 10.3-6.5 16.7s6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.1 3.8 9.9 5.1 15.2 3.6C223.6 310.8 208 269.2 208 224c0-60.8 28.3-115 72.4-150.2L220.3 92.1l-29.4-74z"/></svg>`;
}
