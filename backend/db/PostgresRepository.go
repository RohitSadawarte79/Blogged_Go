package db

import (
	"database/sql"
	"errors"
	"fmt"

	"github.com/RohitSadawarte79/Blogged_Go/backend/domain"
)

//create like and delete like feature remaining

type PostgresRepository struct {
	db *sql.DB
}

func FormatErr(customErr error, sqlErr error) error {
	return fmt.Errorf("%w: %v", customErr, sqlErr)
}

func NewPostgresRepository(db *sql.DB) *PostgresRepository {
	return &PostgresRepository{db: db}
}

func (r *PostgresRepository) GetBlogByID(blogID int) (*domain.Blog, error) {
	if blogID <= 0 {
		return nil, FormatErr(domain.ErrorInvalidInput, errors.New("blogId is invalid."))
	}
	var blog domain.Blog
	row := r.db.QueryRow("SELECT id, title, content, author_id, created_at, updated_at FROM blogs WHERE id=$1", blogID)
	err := row.Scan(
		&blog.ID,
		&blog.Title,
		&blog.Content,
		&blog.AuthorID,
		&blog.CreatedAt,
		&blog.UpdatedAt,
	)

	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, FormatErr(domain.ErrBlogNotFound, err)
		} else {
			return nil, FormatErr(domain.ErrDBQueryFailed, err)
		}
	}

	return &blog, nil
}

func (r *PostgresRepository) GetBlogLikesByID(blogID int) ([]*domain.User, error) {
	if blogID <= 0 {
		return nil, FormatErr(domain.ErrorInvalidInput, errors.New("blogId is invalid."))
	}
	var users []*domain.User
	rows, err := r.db.Query(`
	SELECT u.id, u.username 
	FROM blog_likes bl 
	JOIN users u ON u.id = bl.user_id
	WHERE bl.blog_id = $1;
	`, blogID)

	if err != nil {
		return nil, FormatErr(domain.ErrDBConnection, err)
	}

	defer rows.Close()

	for rows.Next() {
		var user domain.User

		err := rows.Scan(&user.ID, &user.UserName)

		if err != nil {
			return nil, FormatErr(domain.ErrDataCorrupt, err)
		}

		users = append(users, &user)
	}

	if err := rows.Err(); err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	return users, nil
}

func (r *PostgresRepository) UpdateBlog(blog *domain.Blog) (*domain.Blog, error) {
	if blog == nil {
		return nil, domain.ErrorInvalidBlogInput
	}

	row := r.db.QueryRow(`
	UPDATE blogs
	SET title = $1, content = $2, updated_at = NOW() 
	WHERE id = $3 
	RETURNING id, title, content, author_id, created_at, updated_at;
	`, blog.Title, blog.Content, blog.ID)

	err := row.Scan(
		&blog.ID,
		&blog.Title,
		&blog.Content,
		&blog.AuthorID,
		&blog.CreatedAt,
		&blog.UpdatedAt,
	)

	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, FormatErr(domain.ErrBlogNotFound, err)
		}

		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	return blog, nil
}

func (r *PostgresRepository) CreateBlog(blog *domain.Blog) error {
	if blog == nil {
		return domain.ErrorInvalidBlogInput
	}

	row := r.db.QueryRow("INSERT INTO blogs (title, content, author_id) VALUES ($1, $2, $3) RETURNING id, created_at, updated_at;", blog.Title, blog.Content, blog.AuthorID)

	err := row.Scan(
		&blog.ID,
		&blog.CreatedAt,
		&blog.UpdatedAt,
	)

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	return nil
}

func (r *PostgresRepository) FindAllBlogs() ([]*domain.Blog, error) {
	var blogs []*domain.Blog

	rows, err := r.db.Query("SELECT id, title, content, author_id, created_at, updated_at FROM blogs ORDER BY created_at")

	if err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	defer rows.Close()

	for rows.Next() {
		var blog domain.Blog

		err := rows.Scan(
			&blog.ID,
			&blog.Title,
			&blog.Content,
			&blog.AuthorID,
			&blog.CreatedAt,
			&blog.UpdatedAt,
		)

		if err != nil {
			return nil, FormatErr(domain.ErrDataCorrupt, err)
		}

		blogs = append(blogs, &blog)
	}

	if err := rows.Err(); err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	return blogs, nil
}

func (r *PostgresRepository) DeleteBlog(blogID int) error {
	if blogID <= 0 {
		return FormatErr(domain.ErrorInvalidInput, errors.New("blogId is invalid."))
	}

	result, err := r.db.Exec(`DELETE FROM blogs WHERE id=$1;`, blogID)

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	rowsAffected, err := result.RowsAffected()

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	if rowsAffected == 0 {
		return domain.ErrBlogNotFound
	}

	return nil
}

func (r *PostgresRepository) CreateLike(like *domain.BlogLike) error {
	if like == nil {
		return FormatErr(domain.ErrorInvalidInput, errors.New("nil like input"))
	}

	row := r.db.QueryRow(
		"INSERT INTO blog_likes (user_id, blog_id) VALUES ($1, $2) RETURNING created_at",
		like.UserID,
		like.BlogID,
	)

	if err := row.Scan(&like.CreatedAt); err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	return nil
}

func (r *PostgresRepository) DeleteLike(userId, blogId int) error {
	if userId <= 0 || blogId <= 0 {
		return FormatErr(domain.ErrorInvalidInput, errors.New("Invalid Id"))
	}

	result, err := r.db.Exec(`DELETE FROM blog_likes WHERE user_id=$1 AND blog_id=$2`, userId, blogId)

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	rowsAffected, err := result.RowsAffected()

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	if rowsAffected == 0 {
		return domain.ErrBlogLikeNotFound
	}

	return nil
}

// user methods
func (r *PostgresRepository) GetUserByID(id int) (*domain.User, error) {
	var user domain.User
	row := r.db.QueryRow("SELECT id, username, email, password, created_at FROM users WHERE id=$1", id)
	err := row.Scan(
		&user.ID,
		&user.UserName,
		&user.Email,
		&user.Password,
		&user.CreatedAt,
	)

	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, FormatErr(domain.ErrUserNotFound, err)
		} else {
			return nil, FormatErr(domain.ErrDBQueryFailed, err)
		}
	}

	return &user, nil
}

func (r *PostgresRepository) GetByEmail(email string) (*domain.User, error) {
	var user domain.User
	row := r.db.QueryRow("SELECT id, username, email, password, created_at FROM users WHERE email=$1", email)
	err := row.Scan(
		&user.ID,
		&user.UserName,
		&user.Email,
		&user.Password,
		&user.CreatedAt,
	)

	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, FormatErr(domain.ErrUserNotFound, err)
		} else {
			return nil, FormatErr(domain.ErrDBQueryFailed, err)
		}
	}

	return &user, nil
}

func (r *PostgresRepository) GetFollowers(following_id int) ([]*domain.User, error) {
	var users []*domain.User

	rows, err := r.db.Query(`
	SELECT u.id, u.username 
	FROM follows f 
	JOIN users u ON u.id = f.follower_id 
	WHERE f.following_id=$1;
	`, following_id)

	if err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	defer rows.Close()

	for rows.Next() {
		var user domain.User

		err := rows.Scan(&user.ID, &user.UserName)

		if err != nil {
			return nil, FormatErr(domain.ErrDataCorrupt, err)
		}

		users = append(users, &user)
	}

	if err := rows.Err(); err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	return users, nil
}

func (r *PostgresRepository) GetFollowings(follower_id int) ([]*domain.User, error) {
	var users []*domain.User

	rows, err := r.db.Query(`
	SELECT u.id, u.username 
	FROM follows f
	JOIN users u ON u.id = f.following_id 
	WHERE f.follower_id = $1;
	`, follower_id)

	if err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	defer rows.Close()

	for rows.Next() {
		var user domain.User

		err := rows.Scan(&user.ID, &user.UserName)

		if err != nil {
			return nil, FormatErr(domain.ErrDataCorrupt, err)
		}

		users = append(users, &user)
	}

	if err := rows.Err(); err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	return users, nil
}

func (r *PostgresRepository) CreateUser(user *domain.User) error {
	if user == nil {
		return FormatErr(domain.ErrInvalidUserInput, errors.New("nil user input"))
	}
	row := r.db.QueryRow("INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, created_at;", user.UserName, user.Email, user.Password)

	err := row.Scan(
		&user.ID,
		&user.CreatedAt,
	)

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	return nil
}

func (r *PostgresRepository) FindAllUsers() ([]*domain.User, error) {
	var users []*domain.User

	rows, err := r.db.Query("SELECT id, username, email, password, created_at FROM users")

	if err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	defer rows.Close()

	for rows.Next() {
		var user domain.User

		err := rows.Scan(
			&user.ID,
			&user.UserName,
			&user.Email,
			&user.Password,
			&user.CreatedAt,
		)

		if err != nil {
			return nil, FormatErr(domain.ErrDataCorrupt, err)
		}

		users = append(users, &user)
	}

	if err := rows.Err(); err != nil {
		return nil, FormatErr(domain.ErrDBQueryFailed, err)
	}

	return users, nil
}

func (r *PostgresRepository) Unfollow(follower_id, following_id int) error {
	if follower_id <= 0 || following_id <= 0 {
		return FormatErr(domain.ErrorInvalidInput, errors.New("follwer id or follower id is invalid"))
	}

	result, err := r.db.Exec(`DELETE FROM follows WHERE follower_id=$1 AND following_id;`, follower_id, following_id)

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	rowsAffected, err := result.RowsAffected()

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	if rowsAffected == 0 {
		return domain.ErrUserNotFound
	}

	return nil
}

func (r *PostgresRepository) Follow(followStruct *domain.Follows) error {
	if followStruct == nil {
		return FormatErr(domain.ErrorInvalidInput, errors.New("followstruct is nil"))
	}

	if followStruct.FollowerID <= 0 || followStruct.FollowingID <= 0 {
		return FormatErr(domain.ErrorInvalidInput, errors.New("follwer id or follower id is invalid"))
	}

	row := r.db.QueryRow(`INSERT INTO follows (follower_id, following_id) VALUES ($1, $2) RETURNING created_at;`, followStruct.FollowerID, followStruct.FollowingID)

	err := row.Scan(&followStruct.CreatedAt)

	if err != nil {
		return FormatErr(domain.ErrDBQueryFailed, err)
	}

	return nil
}
