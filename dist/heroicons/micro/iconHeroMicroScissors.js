export function iconHeroMicroScissors(props) /* #__PURE__ */  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M2.25 6.665c.969.56 2.157.396 2.94-.323l.359.207c.34.196.777.02.97-.322.19-.337.115-.784-.22-.977l-.359-.207a2.501 2.501 0 1 0-3.69 1.622ZM4.364 5a1 1 0 1 1-1.732-1 1 1 0 0 1 1.732 1ZM8.903 5.465a2.75 2.75 0 0 0-1.775 1.893l-.375 1.398-1.563.902a2.501 2.501 0 1 0 .75 1.3L14.7 5.9a.75.75 0 0 0-.18-1.374l-.782-.21a2.75 2.75 0 0 0-1.593.052L8.903 5.465ZM4.365 11a1 1 0 1 1-1.732 1 1 1 0 0 1 1.732-1Z" clip-rule="evenodd"/><path d="M8.892 10.408c-.052.03-.047.108.011.128l3.243 1.097a2.75 2.75 0 0 0 1.593.05l.781-.208a.75.75 0 0 0 .18-1.374l-2.137-1.235a1 1 0 0 0-1 0l-2.67 1.542Z"/></svg>`;
}
