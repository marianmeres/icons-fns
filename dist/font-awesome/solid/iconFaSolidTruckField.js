export const iconFaSolidTruckField = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M32 96c0-35.3 28.7-64 64-64l224 0c23.7 0 44.4 12.9 55.4 32l51.8 0c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1 .9 2.1 1.3 3.2l4.2 0c35.3 0 64 28.7 64 64l0 32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-32c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l0-32zM384 224l85.9 0-42.7-96L384 128l0 96zM160 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>`;
}
