export function iconBsSafe2Fill(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M6.563 8H5.035a3.482 3.482 0 0 1 .662-1.596l1.08 1.08c-.094.16-.167.332-.214.516m.921-1.223-1.08-1.08A3.482 3.482 0 0 1 8 5.035v1.528c-.184.047-.357.12-.516.214zM9 6.563V5.035a3.482 3.482 0 0 1 1.596.662l-1.08 1.08A1.988 1.988 0 0 0 9 6.563m1.223.921 1.08-1.08c.343.458.577 1.003.662 1.596h-1.528a1.989 1.989 0 0 0-.214-.516M10.437 9h1.528a3.483 3.483 0 0 1-.662 1.596l-1.08-1.08c.094-.16.167-.332.214-.516m-.921 1.223 1.08 1.08A3.483 3.483 0 0 1 9 11.965v-1.528c.184-.047.357-.12.516-.214zM8 10.437v1.528a3.483 3.483 0 0 1-1.596-.662l1.08-1.08c.16.094.332.167.516.214m-1.223-.921-1.08 1.08A3.482 3.482 0 0 1 5.035 9h1.528c.047.184.12.357.214.516zM7.5 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/><path d="M2.5 1A1.5 1.5 0 0 0 1 2.5V3H.5a.5.5 0 0 0 0 1H1v4H.5a.5.5 0 0 0 0 1H1v4H.5a.5.5 0 0 0 0 1H1v.5A1.5 1.5 0 0 0 2.5 16h12a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 1zm6 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"/></svg>`;
}
