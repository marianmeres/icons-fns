export const iconFaRegularBarChart = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56L0 400c0 44.2 35.8 80 80 80l408 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L80 432c-17.7 0-32-14.3-32-32L48 56zm104 72l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L152 80c-13.3 0-24 10.7-24 24s10.7 24 24 24zm0 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 112c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-272 0z"/></svg>`;
}
