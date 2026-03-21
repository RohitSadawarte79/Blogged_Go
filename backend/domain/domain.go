package domain

import (
	"errors"
	"time"
)

type UserRepository interface {
	GetUserByID(id int) (*User, error)
	GetByEmail(email string) (*User, error)
	GetFollowers(following_id int) ([]*User, error)
	GetFollowings(follower_id int) ([]*User, error)
	CreateUser(user *User) error
	FindAllUsers() ([]*User, error)
	Follow(followStruct *Follows) error
	Unfollow(follower_id, following_id int) error
}

type BlogRepository interface {
	GetBlogByID(BlogID int) (*Blog, error)
	GetBlogLikesByID(BlogID int) ([]*User, error)
	UpdateBlog(blog *Blog) (*Blog, error)
	CreateLike(like *BlogLike) error
	DeleteLike(userId, blogId int) error
	CreateBlog(blog *Blog) error
	DeleteBlog(blogID int) error
	FindAllBlogs() ([]*Blog, error)
}

type Blog struct {
	ID        int
	Title     string
	Content   string
	AuthorID  int
	CreatedAt time.Time
	UpdatedAt time.Time
}

type User struct {
	ID        int
	UserName  string
	Email     string
	Password  string
	CreatedAt time.Time
}

type Follows struct {
	FollowerID  int
	FollowingID int
	CreatedAt   time.Time
}

type BlogLike struct {
	UserID    int
	BlogID    int
	CreatedAt time.Time
}

var ErrBlogNotFound = errors.New("Blog not found in the database.")
var ErrUserNotFound = errors.New("User not found in the database.")
var ErrBlogLikeNotFound = errors.New("BlogLike not found in the database.")
var ErrDBConnection = errors.New("Not able to connect to the database.") //Internal Server Error
var ErrDataCorrupt = errors.New("Error the data is corrupted.")          // 500 interanal error
var ErrDBQueryFailed = errors.New("database query failed")
var ErrorInvalidBlogInput = errors.New("Blog input is invalid.")
var ErrResultCheckFailed = errors.New("failed to check query result")
var ErrInvalidUserInput = errors.New("The user input is not valid")
var ErrorInvalidInput = errors.New("The input is invalid")
