export const iconFaSolidEthernet = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M0 224L0 416c0 17.7 14.3 32 32 32l64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0 0-112c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 64 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32L160 64c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32z"/></svg>`;
}
