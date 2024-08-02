export const iconPhThinSpadeThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M178.56,52.93a281.08,281.08,0,0,0-48.77-32.51,4,4,0,0,0-3.58,0A281.08,281.08,0,0,0,77.44,52.93C45.1,79.88,28,108.61,28,136a52,52,0,0,0,76.46,45.89l-12.29,41A4,4,0,0,0,96,228h64a4,4,0,0,0,3.83-5.15l-12.29-41A52,52,0,0,0,228,136C228,108.61,210.9,79.88,178.56,52.93ZM176,180a44,44,0,0,1-28.92-10.84,4,4,0,0,0-6.46,4.17l14,46.67H101.38l14-46.67a4,4,0,0,0-6.46-4.17A44,44,0,0,1,36,136c0-56.06,79-100.56,92-107.49,13,6.93,92,51.38,92,107.49A44.05,44.05,0,0,1,176,180Z"/></svg>`;
}
