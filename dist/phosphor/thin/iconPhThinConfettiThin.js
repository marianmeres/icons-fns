export const iconPhThinConfettiThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M108.66,55.46a11.79,11.79,0,0,0-19.43,4.31L36.73,204.15a11.81,11.81,0,0,0,11,15.85,11.88,11.88,0,0,0,4.08-.73l144.38-52.5a11.79,11.79,0,0,0,4.31-19.43Zm-6.53,137L63.52,153.87l16.19-44.51,66.92,66.93Zm-53,19.28a3.81,3.81,0,0,1-4.87-4.87l16.27-44.72,33.32,33.32Zm146.8-55.25a3.77,3.77,0,0,1-2.42,2.74l-38.56,14L82.72,101.07l14-38.56a3.77,3.77,0,0,1,2.74-2.42,4.32,4.32,0,0,1,.85-.09A3.65,3.65,0,0,1,103,61.12L194.88,153A3.78,3.78,0,0,1,195.91,156.51ZM220,24c0,9.68-5.85,28-28,28-8.31,0-14.18,3.29-17.42,9.79A26.12,26.12,0,0,0,172,72a4,4,0,0,1-8,0,34.06,34.06,0,0,1,3.42-13.79C170.66,51.73,177.56,44,192,44c19.29,0,20-18,20-20a4,4,0,0,1,4-4h0A4,4,0,0,1,220,24ZM140,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm94.83,85.17a4,4,0,0,1-5.66,5.66l-16-16a4,4,0,0,1,5.66-5.66Zm6.43-49.37-24,8A4,4,0,0,1,216,84a4,4,0,0,1-1.27-7.79l24-8a4,4,0,0,1,2.53,7.59Z"/></svg>`;
}
