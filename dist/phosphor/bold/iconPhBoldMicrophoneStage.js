export const iconPhBoldMicrophoneStage = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M168,12A75.9,75.9,0,0,0,92.49,96.33L23.91,189.85a19.89,19.89,0,0,0,2,26l14.29,14.29a19.89,19.89,0,0,0,26,2l93.52-68.58A76,76,0,1,0,168,12Zm52,76a51.66,51.66,0,0,1-7.75,27.27L140.74,43.75A52,52,0,0,1,220,88ZM54.72,210.71l-9.43-9.43,56.19-76.63a76.46,76.46,0,0,0,29.87,29.87ZM116,88a51.63,51.63,0,0,1,7.75-27.27l71.51,71.51A52,52,0,0,1,116,88Z"/></svg>`;
}
