import "./wasm_exec.js"

const $ = document
const go = new Go()

let wasm

$.getElementById('loadWasm').addEventListener('click', async () => {
  const resp = await fetch('wasm')
  const byte = await resp.arrayBuffer()
  wasm = await WebAssembly.instantiate(byte, go.importObject)
  console.log('Loaded Wasm')
})

$.getElementById('execWasm').addEventListener('click', async () => {
  if (!wasm) {
    alert('Not Load Wasm')
    return
  }
  await go.run(wasm.instance)
})