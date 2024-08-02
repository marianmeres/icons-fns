export const iconPhThinHandsClapping = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M164.22,24V8a4,4,0,0,1,8,0V24a4,4,0,0,1-8,0Zm34,13.55a4,4,0,0,0,5.51-1.33l8-13.11a4,4,0,0,0-6.84-4.17l-8,13.11A4,4,0,0,0,198.19,37.55Zm41.62,17.23a4,4,0,0,0-5.05-2.58L219.7,57.05a4,4,0,0,0,1.23,7.8,4,4,0,0,0,1.23-.19l15.06-4.85A4,4,0,0,0,239.81,54.78ZM203,189.66c-.37,2-.81,4-1.34,6A76.18,76.18,0,0,1,62.22,214L27,153a22,22,0,0,1,22.76-32.69L43.19,109A22,22,0,0,1,65.92,76.32L61.69,69A22,22,0,0,1,96.87,43,21.83,21.83,0,0,1,106.72,31,22.08,22.08,0,0,1,136.82,39l15.79,27.3A22.05,22.05,0,0,1,192.34,63l21.14,36.57A76.19,76.19,0,0,1,203,189.66ZM161.08,81l33,57.05a75.49,75.49,0,0,1,10.21,37.24,68.26,68.26,0,0,0,2.27-71.66L185.4,67A14,14,0,0,0,161.08,81ZM105.59,57l28.54,49.29a22,22,0,0,1,24.28-14L129.88,43a14,14,0,1,0-24.29,14Zm-37,8,10,17.27a22,22,0,0,1,24.27-14L92.91,51A14,14,0,1,0,68.63,65Zm118.5,77L166.9,107a14,14,0,0,0-24.67,13.26L154.83,142a4,4,0,1,1-6.93,4L111.39,83h0a14,14,0,0,0-19.15-5.11A14,14,0,0,0,87.09,97v0h0l26.05,45a4,4,0,0,1-1.46,5.47,4,4,0,0,1-5.48-1.46L74.42,91h0a14,14,0,0,0-24.28,14l35.23,61a4,4,0,0,1-6.94,4L58.18,135a14,14,0,0,0-24.29,14l35.27,61a68.09,68.09,0,0,0,118-68Z"/></svg>`;
}
