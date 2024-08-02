export const iconFaSolidToriiGate = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M0 80c0 26.5 21.5 48 48 48l16 0 0 64 64 0 0-64 96 0 0 64 64 0 0-64 96 0 0 64 64 0 0-64 16 0c26.5 0 48-21.5 48-48l0-66.6C512 6 506 0 498.6 0c-1.7 0-3.4 .3-5 1l-49 19.6C425.7 28.1 405.5 32 385.2 32L126.8 32c-20.4 0-40.5-3.9-59.4-11.4L18.4 1c-1.6-.6-3.3-1-5-1C6 0 0 6 0 13.4L0 80zM64 288l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0z"/></svg>`;
}
