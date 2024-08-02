export const iconPhRegularTreePalm = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M237.79,53.23a66.86,66.86,0,0,0-97.74,0,72.21,72.21,0,0,0-12.05,17,72.21,72.21,0,0,0-12-17,66.86,66.86,0,0,0-97.74,0,8,8,0,0,0,2.6,12.85L77,90.55a71.42,71.42,0,0,0-43.36,33.21,70.64,70.64,0,0,0-7.2,54.32A8,8,0,0,0,39,182.36l81-61.68V224a8,8,0,0,0,16,0V120.68l81,61.68a8,8,0,0,0,12.57-4.28,70.64,70.64,0,0,0-7.2-54.32A71.42,71.42,0,0,0,179,90.55l56.22-24.47a8,8,0,0,0,2.6-12.85ZM67.08,48a51.13,51.13,0,0,1,37.28,16.26,56.53,56.53,0,0,1,14.26,26.93L39,56.53A50.5,50.5,0,0,1,67.08,48ZM40,161.5a54.82,54.82,0,0,1,7.47-29.7,55.55,55.55,0,0,1,34-25.89A56.52,56.52,0,0,1,96.1,104a55.82,55.82,0,0,1,16.23,2.41ZM208.5,131.8A54.82,54.82,0,0,1,216,161.5l-72.3-55.1a56.3,56.3,0,0,1,64.83,25.4ZM137.38,91.19a56.53,56.53,0,0,1,14.26-26.93A51.13,51.13,0,0,1,188.92,48,50.5,50.5,0,0,1,217,56.53Z"/></svg>`;
}
