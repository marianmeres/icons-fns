export const iconFaSolidPrescriptionBottle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0L352 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64L0 32zM32 144l320 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-48 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-48 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-64z"/></svg>`;
}
