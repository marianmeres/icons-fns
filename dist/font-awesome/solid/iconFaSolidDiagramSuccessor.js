export const iconFaSolidDiagramSuccessor = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M512 416l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64zM64 160l0-64 144 0 16 0 0 64L64 160zm224 0l0-64 80 0c8.8 0 16 7.2 16 16l0 16-38.1 0c-21.4 0-32.1 25.9-17 41L399 239c9.4 9.4 24.6 9.4 33.9 0L503 169c15.1-15.1 4.4-41-17-41L448 128l0-16c0-44.2-35.8-80-80-80L224 32l-16 0L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64z"/></svg>`;
}
