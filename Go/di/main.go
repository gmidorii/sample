package main

import (
	"fmt"
	"log"

	"github.com/midorigreen/sample-di/user"
)

func main() {
	di := user.NewDIContainer()

	service, err := di.UserService()
	if err != nil {
		log.Fatalln(err)
	}

	id, err := service.GetId()
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Print(id)
}
