export function iconBxRegularPound(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="m5.553 19.105.764 1.843C7.498 20.555 9.422 20 10 20c.838 0 1.462.208 2.184.448.775.259 1.654.552 2.816.552 1.177 0 3.078-.921 3.447-1.105l-.895-1.789c-.721.36-2.031.894-2.552.894-.838 0-1.462-.208-2.184-.448C12.041 18.293 11.162 18 10 18c-.229 0-.526.037-.857.099C9.702 16.95 10 15.561 10 14h3v-2H9.626c-.042-.107-.084-.216-.125-.317C9.243 11.052 9 10.455 9 9c0-1.369.521-3 3-3 2.224 0 3.021 2.227 3.052 2.316l1.896-.633C16.898 7.533 15.679 4 12 4 8.313 4 7 6.583 7 9c0 1.491.234 2.35.478 3H5v2h3c0 2.467-.892 4.328-2.447 5.105z"/></svg>`;
}
