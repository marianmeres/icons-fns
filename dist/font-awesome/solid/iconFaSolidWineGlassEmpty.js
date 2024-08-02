export const iconFaSolidWineGlassEmpty = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 320 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6l0 99.6-48 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0L64 0zM81.9 203.1L93.4 64l133.1 0 11.6 139.1C242 248.8 205.9 288 160 288s-82-39.2-78.1-84.9z"/></svg>`;
}
