export const iconPhLightWebhooksLogoLight = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M179.37,174H109.6a46,46,0,1,1-82.4-33.61,6,6,0,0,1,9.6,7.21A33.68,33.68,0,0,0,30,168a34,34,0,0,0,68,0,6,6,0,0,1,6-6h75.37a14,14,0,1,1,0,12ZM64,182a14,14,0,0,0,11.73-21.62l36.42-59.18a6,6,0,0,0-2-8.25,34,34,0,1,1,49-42.57,6,6,0,1,0,11-4.79A46,46,0,1,0,99,99.7L65.52,154.08c-.5-.05-1-.08-1.52-.08a14,14,0,0,0,0,28Zm128-60a46,46,0,0,0-18.8,4L139.73,71.61A14,14,0,1,0,128,78a12.79,12.79,0,0,0,1.52-.09l36.4,59.17a6.05,6.05,0,0,0,3.73,2.69,6,6,0,0,0,4.53-.73A34,34,0,1,1,192,202a6,6,0,0,0,0,12,46,46,0,0,0,0-92Z"/></svg>`;
}
