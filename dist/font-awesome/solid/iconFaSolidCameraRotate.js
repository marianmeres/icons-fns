/*@__PURE__*/
export function iconFaSolidCameraRotate(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M213.1 64.8L202.7 96H128c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H437.3L426.9 64.8C420.4 45.2 402.1 32 381.4 32H258.6c-20.7 0-39 13.2-45.5 32.8zM448 256c0 8.8-7.2 16-16 16H355.3c-6.2 0-11.3-5.1-11.3-11.3c0-3 1.2-5.9 3.3-8L371 229c-13.6-13.4-31.9-21-51-21c-19.2 0-37.7 7.6-51.3 21.3L249 249c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l19.7-19.7C257.4 172.7 288 160 320 160c31.8 0 62.4 12.6 85 35l23.7-23.7c2.1-2.1 5-3.3 8-3.3c6.2 0 11.3 5.1 11.3 11.3V256zM192 320c0-8.8 7.2-16 16-16h76.7c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8L269 347c13.6 13.4 31.9 21 51 21c19.2 0 37.7-7.6 51.3-21.3L391 327c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-19.7 19.7C382.6 403.3 352 416 320 416c-31.8 0-62.4-12.6-85-35l-23.7 23.7c-2.1 2.1-5 3.3-8 3.3c-6.2 0-11.3-5.1-11.3-11.3V320z"/></svg>`;
}
