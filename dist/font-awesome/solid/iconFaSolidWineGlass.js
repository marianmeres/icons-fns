export const iconFaSolidWineGlass = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 320 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M32.1 29.3C33.5 12.8 47.4 0 64 0L256 0c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6l0 99.6 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0-80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-99.6C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7l143.8 0-5.3-64L93.4 64l-5.3 64z"/></svg>`;
}
