export const iconPhThinAndroidLogoThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M172,148a8,8,0,1,1-8-8A8,8,0,0,1,172,148Zm-80-8a8,8,0,1,0,8,8A8,8,0,0,0,92,140Zm144,20v24a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V161.13A109.43,109.43,0,0,1,57.18,78.84l-28-28a4,4,0,0,1,5.66-5.66L63.41,73.75A106.63,106.63,0,0,1,127.62,52H128a107.16,107.16,0,0,1,64.78,21.57l28.39-28.4a4,4,0,1,1,5.66,5.66L199,78.64c1.78,1.56,3.52,3.17,5.21,4.86A107.25,107.25,0,0,1,236,160Zm-8,0A100,100,0,0,0,128,60h-.35C72.7,60.19,28,105.56,28,161.13V184a4,4,0,0,0,4,4H224a4,4,0,0,0,4-4Z"/></svg>`;
}
