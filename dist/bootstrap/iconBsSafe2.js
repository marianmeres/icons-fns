export function iconBsSafe2(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h12A1.5 1.5 0 0 1 16 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V14H.5a.5.5 0 0 1 0-1H1V9H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1zM2.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5z"/><path d="M5.035 8h1.528c.047-.184.12-.357.214-.516l-1.08-1.08A3.482 3.482 0 0 0 5.035 8m1.369-2.303 1.08 1.08c.16-.094.332-.167.516-.214V5.035a3.482 3.482 0 0 0-1.596.662M9 5.035v1.528c.184.047.357.12.516.214l1.08-1.08A3.482 3.482 0 0 0 9 5.035m2.303 1.369-1.08 1.08c.094.16.167.332.214.516h1.528a3.483 3.483 0 0 0-.662-1.596M11.965 9h-1.528c-.047.184-.12.357-.214.516l1.08 1.08A3.483 3.483 0 0 0 11.965 9m-1.369 2.303-1.08-1.08c-.16.094-.332.167-.516.214v1.528a3.483 3.483 0 0 0 1.596-.662M8 11.965v-1.528a1.989 1.989 0 0 1-.516-.214l-1.08 1.08A3.483 3.483 0 0 0 8 11.965m-2.303-1.369 1.08-1.08A1.988 1.988 0 0 1 6.563 9H5.035c.085.593.319 1.138.662 1.596M4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></svg>`;
}
