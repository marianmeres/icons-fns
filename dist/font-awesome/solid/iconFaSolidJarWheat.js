export const iconFaSolidJarWheat = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 320 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M32 32C32 14.3 46.3 0 64 0H256c17.7 0 32 14.3 32 32s-14.3 32-32 32H64C46.3 64 32 49.7 32 32zM0 160c0-35.3 28.7-64 64-64H256c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160zm112 0H69.8c-3.2 0-5.8 2.6-5.8 5.8C64 198 90 224 122.2 224H144h32 21.8c32.1 0 58.2-26 58.2-58.2c0-3.2-2.6-5.8-5.8-5.8H208c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7zm48 117.7c-11.7-13.3-28.9-21.7-48-21.7H69.8c-3.2 0-5.8 2.6-5.8 5.8C64 294 90 320 122.2 320H144h32 21.8c32.1 0 58.2-26 58.2-58.2c0-3.2-2.6-5.8-5.8-5.8H208c-19.1 0-36.3 8.4-48 21.7zM112 352H69.8c-3.2 0-5.8 2.6-5.8 5.8C64 390 90 416 122.2 416H144v32c0 8.8 7.2 16 16 16s16-7.2 16-16V416h21.8c32.1 0 58.2-26 58.2-58.2c0-3.2-2.6-5.8-5.8-5.8H208c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7z"/></svg>`;
}
