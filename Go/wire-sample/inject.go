//+build wireinject

package main

import (
	context "context"

	wire "github.com/google/go-cloud/wire"
)

func setUp(ctx context.Context, n fooName, z string) (Foo, error) {
	wire.Build(SuperSet)
	return Foo{}, nil
}
