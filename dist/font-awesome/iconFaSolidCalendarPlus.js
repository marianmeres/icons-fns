export function iconFaSolidCalendarPlus(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M128 32V64H80c-26.5 0-48 21.5-48 48v48H480V112c0-26.5-21.5-48-48-48H384V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H192V32c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 192H32V464c0 26.5 21.5 48 48 48H432c26.5 0 48-21.5 48-48V192zM256 248c13.3 0 24 10.7 24 24v56h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V376H176c-13.3 0-24-10.7-24-24s10.7-24 24-24h56V272c0-13.3 10.7-24 24-24z"/></svg>`;
}
