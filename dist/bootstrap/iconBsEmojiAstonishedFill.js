export function iconBsEmojiAstonishedFill(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.884-3.978a2.092 2.092 0 0 1 .53.332.5.5 0 0 0 .708-.708h-.001v-.001a1.885 1.885 0 0 0-.237-.197 3.087 3.087 0 0 0-.606-.345 2.996 2.996 0 0 0-2.168-.077.5.5 0 1 0 .316.948 1.997 1.997 0 0 1 1.458.048Zm-4.774-.048a.5.5 0 0 0 .316-.948 2.996 2.996 0 0 0-2.167.077 3.091 3.091 0 0 0-.773.478c-.024.02-.047.042-.07.064l-.002.001a.5.5 0 1 0 .728.689 2.09 2.09 0 0 1 .51-.313 2 2 0 0 1 1.458-.048M7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5m-5.247 4.746c-.383.478.08 1.06.687.98 1.04-.135 2.08-.135 3.12 0 .606.08 1.07-.502.687-.98C9.747 10.623 8.998 10 8 10c-.998 0-1.747.623-2.247 1.246"/></svg>`;
}
