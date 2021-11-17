#  Mocking APIs

- documentation of mockserver: https://www.npmjs.com/package/mockserver
- npm install -g mockserver

## Start the mock server

```
mockserver -p 3010 -m ./mocks
```

- The mock files are located in the directory ./mocks 
- To mock a request like GET /api/customer there must be an api and and customer directory in the mocks directory with a GET.mock file.
