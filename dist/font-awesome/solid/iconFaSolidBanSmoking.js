export function iconFaSolidBanSmoking(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M99.5 144.8L178.7 224l96 96 92.5 92.5C335.9 434.9 297.5 448 256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2zM333.3 288l-32-32H384v32H333.3zm32 32H400c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H269.3L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2L365.3 320zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM272 96c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16s7.2 16 16 16s16-7.2 16-16c0-26.5-21.5-48-48-48H304c-8.8 0-16-7.2-16-16s-7.2-16-16-16zM229.5 320l-96-96H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H229.5z"/></svg>`;
}