/**
 * prettier-ignore
 * @__PURE__
 */
export function iconFaSolidChildCombatant(props) {
    // Backward compatible signature support: fn(cls, size, style)
    if (props === null || props === undefined)
        props = {};
    if (typeof props !== 'object')
        props = { class: props || '' };
    if (arguments.length > 1)
        props.size ??= arguments[1];
    if (arguments.length > 2)
        props.style ??= arguments[2];
    // 
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 576 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M176 128A64 64 0 1 0 176 0a64 64 0 1 0 0 128zm-8 352V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V300.5L260.9 321c9.4 15 29.2 19.4 44.1 10s19.4-29.2 10-44.1l-51.7-82.1c-17.6-27.9-48.3-44.9-81.2-44.9H169.8c-33 0-63.7 16.9-81.2 44.9L36.9 287c-9.4 15-4.9 34.7 10 44.1s34.7 4.9 44.1-10L104 300.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32zM448 0H432 416c-8.8 0-16 7.2-16 16s7.2 16 16 16V132.3c-9.6 5.5-16 15.9-16 27.7v32c-17.7 0-32 14.3-32 32V368c0 17.7 14.3 32 32 32h16v96c0 8.8 7.2 16 16 16h59.5c10.4 0 18-9.8 15.5-19.9L484 400h44c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H480V325.3l53.1-17.7c6.5-2.2 10.9-8.3 10.9-15.2V208c0-8.8-7.2-16-16-16H512c-8.8 0-16 7.2-16 16v56l-16 5.3V160c0-11.8-6.4-22.2-16-27.7V16c0-8.8-7.2-16-16-16z"/></svg>`;
}
