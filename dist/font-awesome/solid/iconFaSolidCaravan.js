export const iconFaSolidCaravan = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M0 112C0 67.8 35.8 32 80 32l336 0c88.4 0 160 71.6 160 160l0 160 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-288 0c0 53-43 96-96 96s-96-43-96-96l-16 0c-44.2 0-80-35.8-80-80L0 112zM320 352l128 0 0-96-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l32 0 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 192zM96 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128zm96 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>`;
}
