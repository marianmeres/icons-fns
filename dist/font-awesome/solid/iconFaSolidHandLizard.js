export const iconFaSolidHandLizard = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M0 112C0 85.5 21.5 64 48 64H160h80 46.5c36.8 0 71.2 18 92.1 48.2l113.5 164c13 18.7 19.9 41 19.9 63.8v12 16 48c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32V402.2L273.9 352H240 160 112c-26.5 0-48-21.5-48-48s21.5-48 48-48h48 80c26.5 0 48-21.5 48-48s-21.5-48-48-48H160 48c-26.5 0-48-21.5-48-48z"/></svg>`;
}
