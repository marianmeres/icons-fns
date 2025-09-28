export const iconFaBrandWebflow = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M640 64l-204.2 399.2-191.8 0 85.5-165.5-3.8 0C255.1 389.3 149.9 449.5 0 463.2L0 300.1s95.9-5.7 152.3-64.9l-152.3 0 0-171.2 171.1 0 0 140.8 3.8 0 70-140.8 129.4 0 0 139.9 3.8 0 72.6-139.9 189.3 0z"/></svg>`;
}
