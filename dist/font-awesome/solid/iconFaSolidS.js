export const iconFaSolidS = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 157.5C0 88.2 56.2 32 125.5 32L272 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L125.5 96c-34 0-61.5 27.5-61.5 61.5 0 31 23.1 57.2 53.9 61L210.1 230C272.9 237.9 320 291.2 320 354.5 320 423.8 263.8 480 194.5 480L48 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l146.5 0c34 0 61.5-27.5 61.5-61.5 0-31-23.1-57.2-53.9-61L109.9 282C47.1 274.1 0 220.8 0 157.5z"/></svg>`;
}
