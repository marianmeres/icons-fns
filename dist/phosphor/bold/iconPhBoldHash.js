export const iconPhBoldHash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,84H180.2l7.61-41.85a12,12,0,0,0-23.62-4.3L155.8,84H116.2l7.61-41.85a12,12,0,1,0-23.62-4.3L91.8,84H48a12,12,0,0,0,0,24H87.44l-7.27,40H32a12,12,0,0,0,0,24H75.8l-7.61,41.85a12,12,0,0,0,9.66,14A11.43,11.43,0,0,0,80,228a12,12,0,0,0,11.8-9.86L100.2,172h39.6l-7.61,41.85a12,12,0,0,0,9.66,14,11.43,11.43,0,0,0,2.16.2,12,12,0,0,0,11.8-9.86L164.2,172H208a12,12,0,0,0,0-24H168.56l7.27-40H224a12,12,0,0,0,0-24Zm-79.83,64H104.56l7.27-40h39.61Z"/></svg>`;
}
