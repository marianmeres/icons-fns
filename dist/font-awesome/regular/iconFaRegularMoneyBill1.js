export const iconFaRegularMoneyBill1 = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M112 112c0 35.3-28.7 64-64 64l0 160c35.3 0 64 28.7 64 64l352 0c0-35.3 28.7-64 64-64l0-160c-35.3 0-64-28.7-64-64l-352 0zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm80-48c0 8.8 7.2 16 16 16l0 64-8 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l24 0 24 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-8 0 0-80c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"/></svg>`;
}
