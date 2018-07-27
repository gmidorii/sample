package main

import (
	context "context"
	"flag"
	"fmt"
	"log"

	wire "github.com/google/go-cloud/wire"
)

type fooName string

var SuperSet = wire.NewSet(ProviderFoo)

func ProviderFoo(name fooName) Foo {
	return Foo{
		Name: string(name),
	}
}

func main() {
	n := flag.String("n", "foo", "foo name")
	flag.Parse()

	foo, err := setUp(context.Background(), fooName(*n), "zannenn")
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println(foo.Name)
}
