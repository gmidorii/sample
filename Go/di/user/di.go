package user

// +DICON
type Container interface {
	UserService() (UserService, error)
}
