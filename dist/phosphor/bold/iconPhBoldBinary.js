export const iconPhBoldBinary = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,24C68.45,24,52,43.74,52,72s16.45,48,40,48,40-19.74,40-48S115.55,24,92,24Zm0,72C76.45,96,76,74.46,76,72s.45-24,16-24,16,21.54,16,24S107.55,96,92,96Zm53.27-42.63a12,12,0,0,1,5.36-16.1l24-12A12,12,0,0,1,192,36v72a12,12,0,0,1-24,0V55.42l-6.63,3.31A12,12,0,0,1,145.27,53.37ZM164,136c-23.55,0-40,19.74-40,48s16.45,48,40,48,40-19.74,40-48S187.55,136,164,136Zm0,72c-15.55,0-16-21.54-16-24s.45-24,16-24,16,21.54,16,24S179.55,208,164,208Zm-60-60v72a12,12,0,0,1-24,0V167.42l-6.63,3.31a12,12,0,1,1-10.74-21.46l24-12A12,12,0,0,1,104,148Z"/></svg>`;
}
