export const iconPhBoldGlobeHemisphereEast = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,24a83.57,83.57,0,0,1,44,12.48v16L151.79,96l-28.47,3.85L104.62,87.6a20,20,0,0,0-28.07,5.28l-20.94,31.3a19.89,19.89,0,0,0-3.38,11l-.16,28.69A84,84,0,0,1,128,44ZM68.41,187.14A20,20,0,0,0,76,171.55l.2-35,18.07-27,16.62,10.88a19.92,19.92,0,0,0,14.14,3.42l31.47-4.26A20,20,0,0,0,169,112.79L191.16,87a20.15,20.15,0,0,0,4.39-8.9,83.78,83.78,0,0,1,14.12,69.48l-11.34-10.37a20.08,20.08,0,0,0-21.17-3.71l-30.45,12.66a20.1,20.1,0,0,0-12.11,15.55l-2.39,16.2a20,20,0,0,0,14.71,22.26l16,4.18a83.78,83.78,0,0,1-94.47-17.24Zm116.77,2.32-1.63-1.63a20.05,20.05,0,0,0-9.08-5.22l-18-4.72L158,167.48l26-10.81L200,171.26A84.84,84.84,0,0,1,185.18,189.46Z"/></svg>`;
}