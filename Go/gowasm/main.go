package main

import (
	"fmt"
	"syscall/js"
)

func main() {

	// Execute JS function
	alert := js.Global().Get("alert")
	alert.Invoke("Hello Wasm!!")

	// Parameter from JS
	cb := js.NewCallback(callBack)
	defer cb.Release()
	js.Global().Get("document").Call("getElementById", "gocall").Call("addEventListener", "click", cb)
}

func callBack(args []js.Value) {
	fmt.Println(args[0])
	fmt.Println("Hi Callback")
}
