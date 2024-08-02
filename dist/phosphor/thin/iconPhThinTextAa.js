export const iconPhThinTextAa = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M83.62,54.3a4,4,0,0,0-7.24,0l-64,136a4,4,0,0,0,7.24,3.4L37.36,156h85.28l17.74,37.7a4,4,0,1,0,7.24-3.4ZM41.13,148,80,65.39,118.87,148ZM200,100c-11.67,0-20.69,3.08-26.82,9.16a4,4,0,1,0,5.64,5.68c4.57-4.54,11.7-6.84,21.18-6.84,15.44,0,28,10.77,28,24v11.92A37.78,37.78,0,0,0,200,132c-19.85,0-36,14.35-36,32s16.15,32,36,32a37.78,37.78,0,0,0,28-11.92V192a4,4,0,0,0,8,0V132C236,114.36,219.85,100,200,100Zm0,88c-15.44,0-28-10.77-28-24s12.56-24,28-24,28,10.77,28,24S215.44,188,200,188Z"/></svg>`;
}
