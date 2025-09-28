export const iconFaBrandLumonDrop = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M480 32c53 0 96 43 96 96l0 224c0 53-43 96-96 96L96 448c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l384 0zM302.4 114.7c-9.8-16.4-20.5-16.4-29.6 0l-68.9 114c-10.7 15.6-16.4 32.8-16.4 52.5 0 50.9 44.3 94.3 100.1 94.3 55 0 100.9-43.5 100.9-94.3 0-19.7-6.6-37.8-17.2-52.5l-68.9-114z"/></svg>`;
}
