export const iconFaSolidMemory = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M64 64C28.7 64 0 92.7 0 128v7.4c0 6.8 4.4 12.6 10.1 16.3C23.3 160.3 32 175.1 32 192s-8.7 31.7-21.9 40.3C4.4 236 0 241.8 0 248.6V320H576V248.6c0-6.8-4.4-12.6-10.1-16.3C552.7 223.7 544 208.9 544 192s8.7-31.7 21.9-40.3c5.7-3.7 10.1-9.5 10.1-16.3V128c0-35.3-28.7-64-64-64H64zM576 352H0v64c0 17.7 14.3 32 32 32H80V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h96V416c0-8.8 7.2-16 16-16s16 7.2 16 16v32h48c17.7 0 32-14.3 32-32V352zM192 160v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>`;
}
