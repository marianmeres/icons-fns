export const iconFaRegularFolderClosed = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M251.7 127.6s0 0 0 0c10.5 10.5 24.7 16.4 39.6 16.4L448 144c8.8 0 16 7.2 16 16l0 32L48 192l0-96c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l33.9-33.9L208.8 84.7l42.9 42.9zM48 240l416 0 0 176c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-176zM285.7 93.7L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.3 96c-2.1 0-4.2-.8-5.7-2.3z"/></svg>`;
}
