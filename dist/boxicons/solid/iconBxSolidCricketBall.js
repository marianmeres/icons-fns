export function iconBxSolidCricketBall(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m3.67 16.26.54.53-.62.61a9 9 0 0 0 .84 1.11L18.51 4.42a10.93 10.93 0 0 0-1.1-.83l-.62.61-.53-.53.48-.48A10 10 0 0 0 3.2 16.74zM14.86 5.07l.53.53L14 7l-.53-.53zm-2.79 2.8.52.53-1.39 1.4-.53-.53zm-2.8 2.8.53.53-1.4 1.39-.53-.53zm-2.8 2.79L7 14l-1.4 1.4-.53-.53zm.12 6.95.62-.61.53.53-.48.48A10 10 0 0 0 20.8 7.26l-.47.48-.54-.53.62-.61a9 9 0 0 0-.84-1.11L5.49 19.58a10.93 10.93 0 0 0 1.1.83zM18.4 8.61l.53.53-1.4 1.4L17 10zm-2.8 2.8.53.53-1.4 1.39-.53-.53zm-2.8 2.79.53.53-1.39 1.4-.54-.53zM10 17l.53.53-1.4 1.4-.53-.53z"/></svg>`;
}
