export function iconBxSolidFileMd(props) /*@__PURE__*/  {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M14.481 14.015c-.238 0-.393.021-.483.042v3.089c.091.021.237.021.371.021.966.007 1.597-.525 1.597-1.653.007-.981-.568-1.499-1.485-1.499z"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.934 15.951-.07-1.807a53.142 53.142 0 0 1-.042-1.94h-.021a26.098 26.098 0 0 1-.525 1.828l-.574 1.842H9l-.504-1.828a21.996 21.996 0 0 1-.428-1.842h-.013c-.028.638-.049 1.366-.084 1.954l-.084 1.793h-.988L7.2 13.23h1.422l.462 1.576c.147.546.295 1.135.399 1.688h.021a39.87 39.87 0 0 1 .448-1.694l.504-1.569h1.394l.26 4.721h-1.044zm5.25-.56c-.498.413-1.253.609-2.178.609a9.27 9.27 0 0 1-1.212-.07v-4.636a9.535 9.535 0 0 1 1.443-.099c.896 0 1.478.161 1.933.505.49.364.799.945.799 1.778 0 .904-.33 1.528-.785 1.913zM14 9h-1V4l5 5h-4z"/></svg>`;
}
