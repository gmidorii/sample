package main

import (
	"encoding/json"
	"log"

	"github.com/eawsy/aws-lambda-go-core/service/lambda/runtime"
)

func Handle(evt json.RawMessage, ctx *runtime.Context) (interface{}, error) {
	log.Println("Hello")
	j, err := evt.MarshalJSON()
	if err != nil {
		return nil, err
	}
	log.Println(string(j))
	return nil, nil
}

func main() {
}
