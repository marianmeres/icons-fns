export const iconHeroMiniBattery100 = (props) => {
    const { size, class: cls, style, strokeWidth } = props || {};
    let attrs = Object.entries(props).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 20}" height="${size || 20}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M4.75 8a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-9.5Z"/><path fill-rule="evenodd" d="M1 7.25A2.25 2.25 0 0 1 3.25 5h12.5A2.25 2.25 0 0 1 18 7.25v1.085a1.5 1.5 0 0 1 1 1.415v.5a1.5 1.5 0 0 1-1 1.415v1.085A2.25 2.25 0 0 1 15.75 15H3.25A2.25 2.25 0 0 1 1 12.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75H3.25Z" clip-rule="evenodd"/></svg>`;
}
