export const iconFaSolidYinYang = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 352a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-448c53 0 96 43 96 96s-43 96-96 96-96 43-96 96 43 96 96 96C150 448 64 362 64 256S150 64 256 64zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`;
}
