export const iconBxRegularBrushAlt = (props = {}) => {
    let attrs = Object.entries(props || {}).filter(([k, v]) => !/^class|size|style|strokeWidth$/.test(k)).reduce((m, [k, v]) => ([...m, `${k}="${v}"`]), []).join(' ');
    return `<svg ${style ? `style="${style}" ` : ""}${cls ? `class="${cls}" ` : ""}width="${size || 24}" height="${size || 24}" ${attrs ? `${attrs} ` : ""}viewBox="0 0 24 24"><path d="M19 8.001h-4V4.999a2.92 2.92 0 0 0-.874-2.108 2.943 2.943 0 0 0-2.39-.879C10.202 2.144 9 3.508 9 5.117V8H5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9.999c0-1.103-.897-2-2-2zM5 10h6V5.117c0-.57.407-1.07 1.002-1.117.266 0 .512.103.712.307a.956.956 0 0 1 .286.692V10h.995l.005.001h5V12H5v-2zm0 10v-6h14l.002 6H5z"/></svg>`;
}
