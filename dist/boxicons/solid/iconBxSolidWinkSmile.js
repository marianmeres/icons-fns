export function iconBxSolidWinkSmile(props) {
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
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8.5 9a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 9zm7.741 7.244a5.982 5.982 0 0 1-3.034 1.634 6.042 6.042 0 0 1-3.541-.349 5.997 5.997 0 0 1-2.642-2.176l1.658-1.117c.143.211.307.41.488.59a3.988 3.988 0 0 0 1.273.86c.243.102.495.181.749.232a4.108 4.108 0 0 0 1.616 0c.253-.052.505-.131.75-.233.234-.1.464-.224.679-.368.208-.142.407-.306.591-.489.183-.182.347-.381.489-.592l1.658 1.117c-.214.32-.461.62-.734.891zM13 12s.5-2 2.5-2c1.999 0 2.5 2 2.5 2h-5z"/></svg>`;
}