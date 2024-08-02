export const iconPhThinSubtitlesSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M52,136a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H56A4,4,0,0,1,52,136Zm159,77.31a4,4,0,1,1-5.92,5.38L191.69,204H32a12,12,0,0,1-12-12V64A12,12,0,0,1,32,52H53.5L45,42.69A4,4,0,0,1,51,37.31ZM184.41,196l-21.82-24H56a4,4,0,0,1,0-8h99.32L133.5,140H104a4,4,0,0,1,0-8h22.23L60.78,60H32a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4ZM200,140a4,4,0,0,0,0-8H178.52a4,4,0,1,0,0,8Zm24-88H105.79a4,4,0,0,0,0,8H224a4,4,0,0,1,4,4V194.83a4,4,0,1,0,8,0V64A12,12,0,0,0,224,52Z"/></svg>`;
}
