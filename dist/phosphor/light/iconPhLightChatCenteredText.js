export const iconPhLightChatCenteredText = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M166,104a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,104Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm70-74V184a14,14,0,0,1-14,14H154.41L140.16,223a14,14,0,0,1-24.32,0L101.59,198H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V184a2,2,0,0,0,2,2h65.07a6,6,0,0,1,5.21,3l16,28a2,2,0,0,0,3.48,0l16-28a6,6,0,0,1,5.21-3H216a2,2,0,0,0,2-2Z"/></svg>`;
}
