export const iconFaBrandServicestack = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M96 216c81.7 10.2 273.7 102.3 304 232L8 448c99.5-8.1 184.5-137 88-232zM128 64c32.3 35.6 47.7 83.9 46.4 133.6 82.9 33.7 207.3 123.7 233.6 250.4l96 0C463.3 231.9 230.8 79.5 128 64z"/></svg>`;
}
