export const iconPhRegularChatSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38L44.46,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.94,15.94,0,0,0,10.26-3.78l.08-.07L83,208H189.92l12.16,13.38a8,8,0,1,0,11.84-10.76ZM80,192a8,8,0,0,0-5.23,1.95L40,224V64H59L175.37,192ZM232,64V186a8,8,0,0,1-16,0V64H105.79a8,8,0,0,1,0-16H216A16,16,0,0,1,232,64Z"/></svg>`;
}
