export const iconPhThinStackOverflowLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M212,152.09V216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V152.09a4,4,0,0,1,8,0V212H204V152.09a4,4,0,0,1,8,0Zm-124,28h80a4,4,0,1,0,0-8H88a4,4,0,1,0,0,8Zm5.92-52.86,77.27,20.67a3.72,3.72,0,0,0,1,.14,4,4,0,0,0,1-7.85L96,119.47a4,4,0,1,0-2.07,7.72Zm19.41-49.54,69.28,39.95a4,4,0,1,0,4-6.92L117.33,70.73a4,4,0,1,0-4,6.92Zm88.16,13.66a4,4,0,0,0,5.66-5.64l-56.57-56.5a4,4,0,1,0-5.66,5.65Z"/></svg>`;
}
