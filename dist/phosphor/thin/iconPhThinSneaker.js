export const iconPhThinSneaker = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M227.38,132.91l-60.72-20.24A28,28,0,0,1,150,97.53L126.69,43.12a12,12,0,0,0-15.07-6.4L35.9,64.25A12,12,0,0,0,28,75.53V192a12,12,0,0,0,12,12H240a12,12,0,0,0,12-12V167.06A36,36,0,0,0,227.38,132.91ZM38.63,71.77l75.72-27.53a3.84,3.84,0,0,1,1.37-.24,4,4,0,0,1,3.63,2.32L128.17,67l-25.54,9.29A4,4,0,0,0,104,84a4.12,4.12,0,0,0,1.37-.24l25.95-9.44,7.89,18.44-20.58,7.48A4,4,0,0,0,120,108a4.12,4.12,0,0,0,1.37-.24l21-7.64.25.6a36.11,36.11,0,0,0,13.52,15.7l-21.5,7.82A4,4,0,0,0,136,132a4.12,4.12,0,0,0,1.37-.24l29.3-10.66,58.18,19.4a28,28,0,0,1,19,23.5H36V75.53A4,4,0,0,1,38.63,71.77ZM240,196H40a4,4,0,0,1-4-4V172H244v20A4,4,0,0,1,240,196Z"/></svg>`;
}
