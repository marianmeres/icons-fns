export const iconFaSolidMarsStrokeUp = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 320 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M148.7 4.7c6.2-6.2 16.4-6.2 22.6 0l64 64c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-40 0 0 24 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 24c0 .6 0 1.2-.1 1.8c77 11.6 136.1 78 136.1 158.2c0 88.4-71.6 160-160 160S0 440.4 0 352c0-80.2 59.1-146.7 136.1-158.2c0-.6-.1-1.2-.1-1.8l0-24-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-24L96 96c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l64-64zM256 352A96 96 0 1 0 64 352a96 96 0 1 0 192 0z"/></svg>`;
}
