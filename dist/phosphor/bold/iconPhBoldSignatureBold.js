export const iconPhBoldSignatureBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M232,164H70.38c2.2-4.42,4.41-8.94,6.59-13.52l.79-1.66c13.52-1.65,28.69-11.3,45.38-28.87,5.31,12,14,24.73,27.59,27.29,5.26,1,13.51.79,22.93-5.82a57.86,57.86,0,0,0,9-7.91C190.9,141.2,205.68,148,232,148a12,12,0,0,0,0-24c-31,0-35.42-10.49-36-12.38.49-5.37-2.75-9.76-7.88-11.63s-11.17.78-14.22,5.46c-10,15.32-16.62,18.62-18.75,18.21-4.88-.91-12.39-15.54-15.44-30.09a12,12,0,0,0-21.13-5c-10.3,12.92-19.16,21.79-26.47,27.56,21.19-52.94,17-72.22,11.37-82.25C98.48,24.91,89.41,20,78,20,59.92,20,45.36,36.55,39,64.26c-3.45,15.1-4,31.81-1.46,45.85,2.65,14.71,8.36,25.7,16.68,32.23C50.69,149.78,47,157.06,43.47,164H24a12,12,0,0,0,0,24h6.7c-9.7,17.67-16.85,29.6-17,29.81a12,12,0,1,0,20.56,12.38C34.91,229.15,45.23,212,58,188H232a12,12,0,0,0,0-24ZM62.43,69.6C65.77,55,72.45,44,78,44c3.71,0,4.29,1,4.64,1.64,1.43,2.53,6.55,17.07-17.44,72.78a44.64,44.64,0,0,1-4-12.56C59.23,94.89,59.68,81.67,62.43,69.6Z"/></svg>`;
}
