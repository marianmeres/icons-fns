export const iconPhBoldChatSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M56.88,31.93A12,12,0,0,0,36.8,44.28,20,20,0,0,0,20,64V224A19.82,19.82,0,0,0,31.56,242.1a20.14,20.14,0,0,0,8.49,1.9,19.91,19.91,0,0,0,12.82-4.72l.12-.11L84.47,212H188.15l11,12.07a12,12,0,0,0,17.76-16.15ZM80,188a11.93,11.93,0,0,0-7.84,2.92L44,215.23V68H57.24L166.33,188ZM236,64V174.12a12,12,0,0,1-24,0V68H116.6a12,12,0,0,1,0-24H216A20,20,0,0,1,236,64Z"/></svg>`;
}
