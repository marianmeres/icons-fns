export const iconFaSolidHamsa = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M34.6 288L80 288c8.8 0 16-7.2 16-16L96 72c0-22.1 17.9-40 40-40s40 17.9 40 40l0 132c0 11 9 20 20 20s20-9 20-20l0-164c0-22.1 17.9-40 40-40s40 17.9 40 40l0 164c0 11 9 20 20 20s20-9 20-20l0-132c0-22.1 17.9-40 40-40s40 17.9 40 40l0 200c0 8.8 7.2 16 16 16l45.4 0c19.1 0 34.6 15.5 34.6 34.6c0 8.6-3.2 16.9-9 23.3L416.6 441c-41.1 45.2-99.4 71-160.6 71s-119.4-25.8-160.6-71L9 345.9c-5.8-6.4-9-14.7-9-23.3C0 303.5 15.5 288 34.6 288zM256 288c-38.4 0-76.8 35.8-90.6 50.2c-3.6 3.7-5.4 8.7-5.4 13.8s1.8 10.1 5.4 13.8C179.2 380.2 217.6 416 256 416s76.8-35.8 90.6-50.2c3.6-3.7 5.4-8.7 5.4-13.8s-1.8-10.1-5.4-13.8C332.8 323.8 294.4 288 256 288zm0 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`;
}
