package user

type UserService interface {
	GetId() (string, error)
}

type userService struct{}

func (u *userService) GetId() (string, error) {
	return "ID", nil
}

func NewUserService() (UserService, error) {
	return &userService{}, nil
}
