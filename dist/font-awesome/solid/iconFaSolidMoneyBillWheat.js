export function iconFaSolidMoneyBillWheat(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M176 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zM56 16h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56C42.7 64 32 53.3 32 40s10.7-24 24-24zM24 88H136c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24S10.7 88 24 88zm8 96c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24zM272 16c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80zM400 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80c0-8.8 7.2-16 16-16zm80 144c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM352 128c8.8 0 16 7.2 16 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>`;
}
