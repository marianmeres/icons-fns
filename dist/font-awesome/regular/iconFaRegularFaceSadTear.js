export const iconFaRegularFaceSadTear = (props = {}) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208s-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C156.6 308.6 128 349 128 369zm128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6c9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9C338.3 320.2 299 304 256 304zm47.6-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`;
}
