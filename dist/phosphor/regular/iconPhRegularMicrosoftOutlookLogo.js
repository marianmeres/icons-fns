export const iconPhRegularMicrosoftOutlookLogo = (props = {}) => {
    props ??= {};
    const { size, class: cls, style, strokeWidth } = props;
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 16}" height="${size || 16}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 256 256" fill="currentColor"><path d="M120,128a32,32,0,1,0-32,32A32,32,0,0,0,120,128Zm-48,0a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm152-24H208V40a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H72v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V112A8,8,0,0,0,224,104Zm-58.34,60L216,127.65v72.7ZM112,48h80v77.24l-40,28.89V80a16,16,0,0,0-16-16H112ZM40,80h96v77.9c0,.12,0,.24,0,.36V176H40ZM88,192h48a16,16,0,0,0,16-16v-2.13L199.26,208H88Z"/></svg>`;
}
