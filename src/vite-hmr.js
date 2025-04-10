export default function CustomHmr() {
    return {
        name: 'custom-hmr',
        enforce: 'post',
        // HMR
        handleHotUpdate({ file, server }) {
            server.ws.send({ type: 'full-reload', path: '*' });
        },
    }
}
