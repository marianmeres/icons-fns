export const iconPhLightEggCrackLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M185,60.67C167.18,34,145.87,18,128,18S88.82,34,71,60.67C52.57,88.32,42,121.61,42,152a86,86,0,0,0,172,0C214,121.61,203.43,88.32,185,60.67ZM128,226a74.09,74.09,0,0,1-74-74c0-28.08,9.84-58.94,27-84.67C96.11,44.65,114.56,30,128,30c10.52,0,24.12,9,36.78,23.77L123.52,100a6,6,0,0,0,3,9.82L153,116.43l-6.87,34.39a6,6,0,0,0,4.7,7.06A6.08,6.08,0,0,0,152,158a6,6,0,0,0,5.87-4.82l8-40a6,6,0,0,0-4.42-7l-22.37-5.59,33.2-37.2q1.36,1.92,2.72,3.94c17.15,25.73,27,56.59,27,84.67A74.09,74.09,0,0,1,128,226Z"/></svg>`;
}
