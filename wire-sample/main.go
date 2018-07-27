package main

import (
	context "context"
	"flag"
	"fmt"
	"log"

	wire "github.com/google/go-cloud/wire"
)

var SuperSet = wire.NewSet(ProviderFoo)

func ProviderFoo(name string) Foo {
	return Foo{
		Name: name,
	}
}

func main() {
	n := flag.String("n", "foo", "foo name")
	flag.Parse()

	foo, err := setUp(context.Background(), *n)
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(foo.Name)
}
