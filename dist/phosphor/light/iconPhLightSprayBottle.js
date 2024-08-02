export const iconPhLightSprayBottle = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M200,78a6,6,0,0,0,6-6,54.06,54.06,0,0,0-54-54H80A14,14,0,0,0,66,32V80a26,26,0,0,1-26,26,6,6,0,0,0,0,12A38,38,0,0,0,78,80V78h36v26.62a25.87,25.87,0,0,1-9.76,20.3l-16,12.79A37.81,37.81,0,0,0,74,167.38V224a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V211.47A268.92,268.92,0,0,0,170.57,78ZM78,32a2,2,0,0,1,2-2h72a42.06,42.06,0,0,1,41.57,36H78ZM194,211.47V224a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2V167.38a25.87,25.87,0,0,1,9.76-20.3l16-12.79A37.81,37.81,0,0,0,126,104.62V78h30.64A256.84,256.84,0,0,1,194,211.47Z"/></svg>`;
}
