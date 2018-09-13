package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/whtml", wasmHTMLHandler)
	http.HandleFunc("/wasm", wasmHandler)

	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))
	http.ListenAndServe(":8888", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("/")
	http.ServeFile(w, r, "index.html")
}

func wasmHTMLHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("/whtml")
	http.ServeFile(w, r, "wasm.html")
}

func wasmHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("/wasm")
	w.Header().Set("Content-Type", "application/wasm")
	http.ServeFile(w, r, "main.wasm")
}
