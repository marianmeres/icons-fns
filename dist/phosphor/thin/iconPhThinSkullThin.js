export const iconPhThinSkullThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M92,108a24,24,0,1,0,24,24A24,24,0,0,0,92,108Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,92,148Zm72-40a24,24,0,1,0,24,24A24,24,0,0,0,164,108Zm0,40a16,16,0,1,1,16-16A16,16,0,0,1,164,148ZM128,20C72.86,20,28,63.07,28,116c0,33.43,18.33,64.64,48,82v18a12,12,0,0,0,12,12h80a12,12,0,0,0,12-12V198c29.67-17.38,48-48.59,48-82C228,63.07,183.14,20,128,20Zm46.06,172.19a4,4,0,0,0-2.06,3.5V216a4,4,0,0,1-4,4H148V192a4,4,0,0,0-8,0v28H116V192a4,4,0,0,0-8,0v28H88a4,4,0,0,1-4-4V195.69a4,4,0,0,0-2.06-3.5C53.6,176.48,36,147.29,36,116c0-48.52,41.27-88,92-88s92,39.48,92,88C220,147.29,202.4,176.48,174.06,192.19Z"/></svg>`;
}
