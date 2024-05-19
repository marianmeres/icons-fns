/*@__PURE__*/
export function iconFaSolidSnowplow(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 640 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M298.9 64l68.6 160H256l-64-64V64H298.9zM445.1 242.7l-87.4-204C347.6 15.3 324.5 0 298.9 0H176c-26.5 0-48 21.5-48 48V160H96c-17.7 0-32 14.3-32 32V298.8C26.2 316.8 0 355.3 0 400c0 61.9 50.1 112 112 112H368c61.9 0 112-50.1 112-112c0-17.2-3.9-33.5-10.8-48H512v50.7c0 17 6.7 33.3 18.7 45.3l54.6 54.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L576 402.7V320 235.2L633 164c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-57 71.2c-9.1 11.3-14 25.4-14 40V288H448V256.7c.1-2.4-.2-4.8-.6-7.1s-1.2-4.7-2.2-6.8zM368 352c26.5 0 48 21.5 48 48s-21.5 48-48 48H112c-26.5 0-48-21.5-48-48s21.5-48 48-48H368zM144 400a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm216 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-56-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM200 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>`;
}
