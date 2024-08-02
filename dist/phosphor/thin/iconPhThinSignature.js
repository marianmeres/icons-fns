export const iconPhThinSignature = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,172H57.32c4-7.83,8.18-16.11,12.21-24.56,15.14,3.55,34.13-8.06,56.54-34.59,3.67,12.5,12.53,34.83,29.08,35.15h.35c8.71,0,17.64-6.25,27.16-19.06C187.17,137.14,199.31,148,232,148a4,4,0,0,0,0-8c-42.88,0-44-19.24-44-20a4,4,0,0,0-7.35-2.18C168.74,136.1,160.42,140,155.48,140h-.18c-13-.25-21.29-26.52-23.38-36.61a4,4,0,0,0-7-1.69c-20.94,26.27-39.06,39.55-51.8,38.2C97.31,87.5,105.19,53.16,96.49,37.77,94,33.31,88.7,28,77.91,28,64.09,28,52.54,42.41,47,66.54A122.7,122.7,0,0,0,45.46,113c2.64,15.29,8.39,26.05,16.69,31.35-4.58,9.6-9.3,19-13.84,27.68H24a4,4,0,0,0,0,8H44.1c-12.87,24.17-23.37,41.68-23.53,41.94a4,4,0,0,0,1.37,5.49A3.93,3.93,0,0,0,24,228a4,4,0,0,0,3.43-1.94c.16-.27,11.85-19.75,25.72-46.06H232a4,4,0,0,0,0-8ZM53.34,111.61a114.81,114.81,0,0,1,1.49-43.29C58.4,52.7,66.34,36,77.91,36c7.52,0,10.23,3.26,11.61,5.7C99,58.4,79.92,106,65.6,137,59.76,132.69,55.46,123.83,53.34,111.61Z"/></svg>`;
}
