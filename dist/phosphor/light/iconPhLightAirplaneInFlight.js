export const iconPhLightAirplaneInFlight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M222,216a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Zm24-80v24a6,6,0,0,1-6,6H61.07a37.77,37.77,0,0,1-36.4-27.08L10.6,92A14,14,0,0,1,24,74h8a6,6,0,0,1,4.24,1.76L58.49,98h26.1L74.73,68.43A14,14,0,0,1,88,50h8a6,6,0,0,1,4.25,1.76L146.49,98H208A38,38,0,0,1,246,136Zm-12,0a26,26,0,0,0-26-26H144a6,6,0,0,1-4.24-1.76L93.52,62H88a2,2,0,0,0-1.9,2.63L98.6,102.1a6,6,0,0,1-5.69,7.9H56a6,6,0,0,1-4.24-1.76L29.52,86H24a1.93,1.93,0,0,0-1.6.81,1.91,1.91,0,0,0-.31,1.76l14.06,46.9A25.86,25.86,0,0,0,61.07,154H234Z"/></svg>`;
}
