export function iconFaSolidBookTanakh(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M352 0c53 0 96 43 96 96V416c0 53-43 96-96 96H64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V384c-17.7 0-32-14.3-32-32V32C0 14.3 14.3 0 32 0H64 352zm0 384H96v64H352c17.7 0 32-14.3 32-32s-14.3-32-32-32zM138.7 208l13.9 24H124.9l13.9-24zm-13.9-24L97.1 232c-6.2 10.7 1.5 24 13.9 24h55.4l27.7 48c6.2 10.7 21.6 10.7 27.7 0l27.7-48H305c12.3 0 20-13.3 13.9-24l-27.7-48 27.7-48c6.2-10.7-1.5-24-13.9-24H249.6L221.9 64c-6.2-10.7-21.6-10.7-27.7 0l-27.7 48H111c-12.3 0-20 13.3-13.9 24l27.7 48zm27.7 0l27.7-48h55.4l27.7 48-27.7 48H180.3l-27.7-48zm0-48l-13.9 24-13.9-24h27.7zm41.6-24L208 88l13.9 24H194.1zm69.3 24h27.7l-13.9 24-13.9-24zm13.9 72l13.9 24H263.4l13.9-24zm-55.4 48L208 280l-13.9-24h27.7z"/></svg>`;
}
