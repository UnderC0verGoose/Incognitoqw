self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: violet.codec.xor.encode,
    decodeUrl: violet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
