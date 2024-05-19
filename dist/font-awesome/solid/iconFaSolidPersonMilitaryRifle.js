export function iconFaSolidPersonMilitaryRifle(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M160 39c0-13 10-23.8 22.9-24.9L334.7 1.4C344 .7 352 8 352 17.4V48c0 8.8-7.2 16-16 16H185c-13.8 0-25-11.2-25-25zm17.6 57H334.4c1 5.2 1.6 10.5 1.6 16c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-5.5 .6-10.8 1.6-16zm228 364.3L352 369.7V480c0 1.3-.1 2.5-.2 3.8L177.5 234.9c16.6-7.1 34.6-10.9 53.3-10.9h50.4c15.9 0 31.3 2.8 45.8 7.9L421.9 67.7c-7.7-4.4-10.3-14.2-5.9-21.9s14.2-10.3 21.9-5.9l13.9 8 13.9 8c7.7 4.4 10.3 14.2 5.9 21.9L416 173.9l1.6 .9c15.3 8.8 20.6 28.4 11.7 43.7L392.6 282c2 2.8 3.9 5.8 5.7 8.8l76.1 128.8c11.2 19 4.9 43.5-14.1 54.8s-43.5 4.9-54.8-14.1zM320 512H192c-17.7 0-32-14.3-32-32V369.7l-53.6 90.6c-11.2 19-35.8 25.3-54.8 14.1s-25.3-35.8-14.1-54.8l76.1-128.8c9.4-15.8 21.7-29.3 36-40L331.1 510c-3.5 1.3-7.2 2-11.1 2zM296 320a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>`;
}
