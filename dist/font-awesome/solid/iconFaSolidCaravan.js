export const iconFaSolidCaravan = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M0 112C0 67.8 35.8 32 80 32H416c88.4 0 160 71.6 160 160V352h32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0H288c0 53-43 96-96 96s-96-43-96-96H80c-44.2 0-80-35.8-80-80V112zM320 352H448V256H416c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V160c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32V352zM96 128c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96zm96 336a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>`;
}
