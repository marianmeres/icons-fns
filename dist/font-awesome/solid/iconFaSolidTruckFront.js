export const iconFaSolidTruckFront = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 112C0 67.8 35.8 32 80 32l288 0c44.2 0 80 35.8 80 80l0 256c0 26.2-12.6 49.4-32 64l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48C12.6 417.4 0 394.2 0 368L0 112zm96 80l0 64 256 0 0-64c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32zm32 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm224 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;
}
