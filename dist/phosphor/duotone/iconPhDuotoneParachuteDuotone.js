export const iconPhDuotoneParachuteDuotone = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,24S88,48,88,120H32A96,96,0,0,1,128,24Zm0,0s40,24,40,96h56A96,96,0,0,0,128,24Z" opacity="0.2"/><path d="M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a8,8,0,0,0,3.12,6.33l.08.07L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM128,34a76.89,76.89,0,0,1,13.88,16.22C149.49,62,158.45,81.87,159.82,112H96.18c1.37-30.13,10.33-50,17.94-61.74A76.92,76.92,0,0,1,128,34Zm26.4,94L128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z"/></svg>`;
}
