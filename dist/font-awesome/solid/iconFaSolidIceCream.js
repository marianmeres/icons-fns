export const iconFaSolidIceCream = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M335.1 160c.6-5.3 .9-10.6 .9-16 0-79.5-64.5-144-144-144S48 64.5 48 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l288 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-.9 0zM64 304L169.2 529.5c4.1 8.8 13 14.5 22.8 14.5s18.6-5.7 22.8-14.5L320 304 64 304z"/></svg>`;
}
