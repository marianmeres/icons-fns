export const iconFaSolidRoadSpikes = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M64 116.8c0-15.8 20.5-22 29.3-8.9L192 256V116.8c0-15.8 20.5-22 29.3-8.9L320 256V116.8c0-15.8 20.5-22 29.3-8.9L448 256V116.8c0-15.8 20.5-22 29.3-8.9L606.8 302.2c14.2 21.3-1.1 49.7-26.6 49.7H512 448 384 320 256 192 64V116.8zM32 384H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>`;
}
