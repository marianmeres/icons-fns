export const iconBxRegularCapsule = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M8.999 20.133a4.969 4.969 0 0 0 3.536-1.465l7.134-7.133a5.007 5.007 0 0 0-.001-7.072C18.723 3.52 17.467 3 16.132 3s-2.591.52-3.534 1.464l-7.134 7.134a5.009 5.009 0 0 0 0 7.072 4.97 4.97 0 0 0 3.535 1.463zm5.013-14.255A2.979 2.979 0 0 1 16.132 5c.802 0 1.556.313 2.122.878a3.004 3.004 0 0 1 .001 4.243l-2.893 2.892L11.12 8.77l2.892-2.892zm-7.134 7.134 2.828-2.828 4.242 4.243-2.827 2.827c-1.133 1.133-3.11 1.132-4.243.001a3.005 3.005 0 0 1 0-4.243z"/></svg>`;
}
