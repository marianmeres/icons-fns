export const iconPhFillGooglePodcastsLogoFill = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M243.32,116.68l-104-104a16,16,0,0,0-22.64,0l-104,104a16,16,0,0,0,0,22.64l104,104a16,16,0,0,0,22.64,0l104-104A16,16,0,0,0,243.32,116.68ZM56,136a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm40,40a8,8,0,0,1-16,0V160a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,88a8,8,0,0,1-16,0V200a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm0-112a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm40,120a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm0-80a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,40a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z"/></svg>`;
}
