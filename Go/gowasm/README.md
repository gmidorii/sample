# Go Wasm

### Build
```bash
GOOS=js GOARCH=wasm go1.11beta1 build -o server/main.wasm main.go
```

server run
```bash
cd server
go run main.go
```