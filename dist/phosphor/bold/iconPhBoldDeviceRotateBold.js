export const iconPhBoldDeviceRotateBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M208.49,224.49l-24,24a12,12,0,0,1-17-17L171,228H80a28,28,0,0,1-28-28V108a12,12,0,0,1,24,0v92a4,4,0,0,0,4,4h91l-3.52-3.51a12,12,0,0,1,17-17l24,24A12,12,0,0,1,208.49,224.49ZM80,76a12,12,0,0,0,8.49-20.49L85,52h91a4,4,0,0,1,4,4v92a12,12,0,0,0,24,0V56a28,28,0,0,0-28-28H85l3.52-3.52a12,12,0,0,0-17-17l-24,24a12,12,0,0,0,0,17l24,24A12,12,0,0,0,80,76Z"/></svg>`;
}
