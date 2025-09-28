export const iconFaBrandBluetoothB = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 512"><!--! Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M164.9 260L257.5 156.7 111.6 0 111.6 206.3 25.4 120.2-6 151.6 102.1 260-6 368.4 25.4 399.8 111.6 313.7 114.3 512 262.8 363.4 164.9 260zm40.9-103l-50 50-.3-100.3 50.3 50.3zm-50 156l50 50-50.3 50.3 .3-100.3z"/></svg>`;
}
