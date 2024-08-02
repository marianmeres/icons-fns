export const iconPhBoldFlyingSaucerBold = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M187.77,213.65a12,12,0,0,1-9.42,14.12A11.87,11.87,0,0,1,176,228a12,12,0,0,1-11.76-9.65l-4-20a12,12,0,1,1,23.54-4.7ZM128,188a12,12,0,0,0-12,12v24a12,12,0,0,0,24,0V200A12,12,0,0,0,128,188Zm-41.65-3.77a12,12,0,0,0-14.12,9.42l-4,20a12,12,0,0,0,9.42,14.12A11.87,11.87,0,0,0,80,228a12,12,0,0,0,11.76-9.65l4-20A12,12,0,0,0,86.35,184.23ZM252,112c0,17.92-14.23,33.89-40.08,45-22.61,9.69-52.42,15-83.92,15s-61.31-5.34-83.92-15C18.23,145.89,4,129.92,4,112,4,87.94,29.28,68,71.91,58.11A67.61,67.61,0,0,1,175.77,47.6a69.05,69.05,0,0,1,8.79,10.62C226.9,68.14,252,88.05,252,112ZM84,96.83v3a4,4,0,0,0,3,3.87A184.32,184.32,0,0,0,128,108a184.32,184.32,0,0,0,41-4.27,4,4,0,0,0,3-3.87V96a44,44,0,0,0-44-44h-.59C103.47,52.31,84,72.43,84,96.83ZM228,112c0-6.64-7.65-12.76-12.21-15.83a91.73,91.73,0,0,0-20.48-9.88A69.47,69.47,0,0,1,196,96v3.93a27.84,27.84,0,0,1-21.66,27.19A207.92,207.92,0,0,1,128,132a207.92,207.92,0,0,1-46.33-4.88A27.84,27.84,0,0,1,60,99.94h0V96.87a70.37,70.37,0,0,1,.82-10.63,92.39,92.39,0,0,0-20.53,9.88C35.7,99.19,28,105.34,28,112c0,14.68,39,36,100,36S228,126.68,228,112Z"/></svg>`;
}
