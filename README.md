# Proxy Chain Docker

This docker image can be used to quickly spin up a proxy-chain instance.
It uses [proxy-chain by Apify](https://github.com/apify/proxy-chain).

Simply spin up a container with docker-compose:

```yaml
version: "3.9"
services:
  proxy-chain-docker:
    image: ghcr.io/melvinvoetberg/proxy-chain-docker
    ports:
      - "8000:8000"
```

Or with an upstream proxy provider:

```yaml
version: "3.9"
services:
  proxy-chain-docker:
    image: ghcr.io/melvinvoetberg/proxy-chain-docker
    environment:
      PROXY_URL: "http://<username>:<password>@<host>:<port>"
    ports:
      - "8000:8000"
```
