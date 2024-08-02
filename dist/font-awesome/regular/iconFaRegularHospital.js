export const iconFaRegularHospital = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M232 0c-39.8 0-72 32.2-72 72l0 8L72 80C32.2 80 0 112.2 0 152L0 440c0 39.8 32.2 72 72 72l.2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0s0 0 0 0l272 0 8 0s0 0 0 0l104 0c39.8 0 72-32.2 72-72l0-288c0-39.8-32.2-72-72-72l-88 0 0-8c0-39.8-32.2-72-72-72L232 0zM480 128l88 0c13.3 0 24 10.7 24 24l0 40-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 48-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 104c0 13.3-10.7 24-24 24l-88 0 0-128 0-208zM72 128l88 0 0 336c0 0 0 0-.1 0l-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0c-13.2 0-24-10.7-24-24l0-104 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-48 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-40c0-13.3 10.7-24 24-24zM208 72c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24l0 264 0 128-64 0 0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 64-64 0 0-392zm88 24l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"/></svg>`;
}
