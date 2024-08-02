export const iconPhThinAlienThin = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M128,20a92.1,92.1,0,0,0-92,92c0,23.19,12.26,53.33,32.8,80.63C84.58,213.6,108.41,236,128,236s43.42-22.4,59.2-43.37C207.74,165.33,220,135.19,220,112A92.1,92.1,0,0,0,128,20Zm52.8,167.82C162.44,212.23,141.71,228,128,228s-34.44-15.77-52.8-40.18C56,162.24,44,133.19,44,112a84,84,0,0,1,168,0C212,133.19,200.05,162.24,180.8,187.82ZM116,136a36,36,0,0,0-36-36,12,12,0,0,0-12,12,36,36,0,0,0,36,36A12,12,0,0,0,116,136Zm-12,4a28,28,0,0,1-28-28,4,4,0,0,1,4-4,28,28,0,0,1,28,28A4,4,0,0,1,104,140Zm72-40a36,36,0,0,0-36,36,12,12,0,0,0,12,12,36,36,0,0,0,36-36A12,12,0,0,0,176,100Zm-24,40a4,4,0,0,1-4-4,28,28,0,0,1,28-28,4,4,0,0,1,4,4A28,28,0,0,1,152,140Zm-4,44a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,184Z"/></svg>`;
}
