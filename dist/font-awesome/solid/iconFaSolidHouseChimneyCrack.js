export const iconFaSolidHouseChimneyCrack = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c.2 35.5-28.5 64.3-64 64.3l-122.1 0L288 448l80.8-67.3c7.8-6.5 7.6-18.6-.4-24.9L250.6 263.2c-14.6-11.5-33.8 7-22.8 22L288 368l-85.5 71.2c-6.1 5-7.5 13.8-3.5 20.5L230.4 512l-102.3 0c-35.3 0-64-28.7-64-64l0-160.4-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7 416 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 121 52.8 46.4c8 7 12 15 11 24z"/></svg>`;
}
