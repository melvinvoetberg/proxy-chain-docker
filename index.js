const ProxyChain = require('proxy-chain');
const proxyUrl = process.env.PROXY_URL;
var server;

if(proxyUrl) {
  server = new ProxyChain.Server({
    port: 8000,
    prepareRequestFunction: (params) => {
      return {
        upstreamProxyUrl: proxyUrl,
      };
    }
  });
} else {
  server = new ProxyChain.Server({ port: 8000 });
}

server.listen(() => {
  if(proxyUrl){
    console.log(`Proxy server with upstreamProxyUrl is listening on port ${server.port}`);
  } else {
    console.log(`Proxy server is listening on port ${server.port}`);
  }
});

server.on('connectionClosed', ({ connectionId, stats }) => {
  console.log(`Connection ${connectionId} closed`);
  console.dir(stats);
});

server.on('requestFailed', ({ request, error }) => {
  console.log(`Request ${request.url} failed`);
  console.error(error);
});
