package services

import "github.com/RohitSadawarte79/Blogged_Go/backend/domain"

type Service struct {
	blogRepo domain.BlogRepository
	userRepo domain.UserRepository
}

func NewService(blogRepo domain.BlogRepository, userRepo domain.UserRepository) *Service {
	return &Service{
		blogRepo: blogRepo,
		userRepo: userRepo,
	}
}

func (s *Service) GetAllPosts() ([]*domain.Blog, error) {
	blogs, err := s.blogRepo.FindAllBlogs()

	return blogs, err
}

func (s *Service) GetPostByID(postId int) (*domain.Blog, error) {
	blog, err := s.blogRepo.GetBlogByID(postId)
	return blog, err
}

func (s *Service) GetPostLikesById(postId int) ([]*domain.User, error) {
	users, err := s.blogRepo.GetBlogLikesByID(postId)
	return users, err
}

func (s *Service) DeletePost(postID int) error {
	err := s.blogRepo.DeleteBlog(postID)
	return err
}

func (s *Service) CreatePost(blog *domain.Blog) error {
	err := s.blogRepo.CreateBlog(blog)
	return err
}

func (s *Service) UpdatePost(blog *domain.Blog) (*domain.Blog, error) {
	updatedBlog, err := s.blogRepo.UpdateBlog(blog)

	return updatedBlog, err
}

//user methods

func (s *Service) GetUserById(userId int) (*domain.User, error) {
	user, err := s.userRepo.GetUserByID(userId)
	return user, err
}

func (s *Service) GetUserByEmail(userEmail string) (*domain.User, error) {
	user, err := s.userRepo.GetByEmail(userEmail)
	return user, err
}

func (s *Service) GetAllUsers() ([]*domain.User, error) {
	users, err := s.userRepo.FindAllUsers()
	return users, err
}

func (s *Service) GetFollowersByID(userId int) ([]*domain.User, error) {
	users, err := s.userRepo.GetFollowers(userId)
	return users, err
}

func (s *Service) GetFollowingsByID(userId int) ([]*domain.User, error) {
	users, err := s.userRepo.GetFollowings(userId)
	return users, err
}

func (s *Service) CreateUser(user *domain.User) error {
	return s.userRepo.CreateUser(user)
}

func (s *Service) LikePost(like *domain.BlogLike) error {
	return s.blogRepo.CreateLike(like)
}

func (s *Service) DislikePost(userId, blogId int) error {
	return s.blogRepo.DeleteLike(userId, blogId)
}

func (s *Service) Follow(follow *domain.Follows) error {
	return s.userRepo.Follow(follow)
}

func (s *Service) Unfollow(user_id, unfollow_id int) error {
	return s.userRepo.Unfollow(user_id, unfollow_id)
}
