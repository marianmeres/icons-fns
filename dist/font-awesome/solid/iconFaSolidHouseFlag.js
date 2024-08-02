export const iconFaSolidHouseFlag = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M480 0c-17.7 0-32 14.3-32 32l0 160 0 320 64 0 0-320 112 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16L512 32c0-17.7-14.3-32-32-32zM416 159L276.8 39.7c-12-10.3-29.7-10.3-41.7 0l-224 192C1 240.4-2.7 254.5 2 267.1S18.6 288 32 288l32 0 0 192c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-96c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 96c0 17.7 14.3 32 32 32l64.7 0 .2 0-1 0 0-353z"/></svg>`;
}
