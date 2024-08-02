export const iconPhDuotoneChatTeardropSlash = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M224,124h0a92,92,0,0,1-92,92H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0A92,92,0,0,1,224,124Z" opacity="0.2"/><path d="M53.92,34.62A8,8,0,1,0,42.08,45.38l13.18,14.5A99.39,99.39,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100.33,100.33,0,0,0,56.53-17.53l13.55,14.91a8,8,0,1,0,11.84-10.76ZM132,208H48V124A83.46,83.46,0,0,1,66.15,71.85L177.66,194.51A83,83,0,0,1,132,208Zm100-84a99.87,99.87,0,0,1-14.35,51.65,8,8,0,0,1-13.7-8.28A84,84,0,0,0,95.66,48.25a8,8,0,0,1-6.94-14.42A100,100,0,0,1,232,124Z"/></svg>`;
}
