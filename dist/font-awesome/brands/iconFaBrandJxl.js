export const iconFaBrandJxl = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M412.2 32L35.8 32C16 32 0 48 0 67.8L0 444.2C0 464 16 480 35.8 480l376.4 0c19.8 0 35.8-16 35.8-35.8l0-376.4C448 48 432 32 412.2 32zM378.6 333.7c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0zm0-113.9c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0zm0-113.9c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0z"/></svg>`;
}
