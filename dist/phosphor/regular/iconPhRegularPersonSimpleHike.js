export const iconPhRegularPersonSimpleHike = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M152,80a32,32,0,1,0-32-32A32,32,0,0,0,152,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,32Zm48,112v88a8,8,0,0,1-16,0V151.66c-25.75-2.25-34.35-15.52-42-27.36-2.85-4.39-5.56-8.57-9.13-12.19l-13.4,30.81,37.2,26.57A8,8,0,0,1,160,176v56a8,8,0,0,1-16,0V180.12l-31.07-22.2L79.34,235.19A8,8,0,0,1,72,240a7.84,7.84,0,0,1-3.19-.67,8,8,0,0,1-4.14-10.52L122.19,96.5a8,8,0,0,1,11-3.92,40.92,40.92,0,0,1,8,5.47c6.37,5.52,10.51,11.91,14.16,17.55,7.68,11.84,13.22,20.4,36.6,20.4A8,8,0,0,1,200,144ZM72,152a8,8,0,0,0,7.35-4.85l24-56a8,8,0,0,0-4.2-10.5l-28-12a8,8,0,0,0-10.5,4.2l-24,56a8,8,0,0,0,4.2,10.5l28,12A8,8,0,0,0,72,152ZM54.51,127.8,72.2,86.5l13.3,5.7L67.8,133.49Z"/></svg>`;
}
