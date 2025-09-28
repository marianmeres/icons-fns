export const iconFaSolidSign = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M96 0c17.7 0 32 14.3 32 32l0 32 352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-352 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0C14.3 128 0 113.7 0 96S14.3 64 32 64l32 0 0-32C64 14.3 78.3 0 96 0zM208 176l240 0c17.7 0 32 14.3 32 32l0 144c0 17.7-14.3 32-32 32l-240 0c-17.7 0-32-14.3-32-32l0-144c0-17.7 14.3-32 32-32z"/></svg>`;
}
