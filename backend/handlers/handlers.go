package handlers

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/RohitSadawarte79/Blogged_Go/backend/domain"
	"github.com/RohitSadawarte79/Blogged_Go/backend/services"
)

type Handler struct {
	svc *services.Service
}

func NewHandler(svc *services.Service) *Handler {
	return &Handler{
		svc: svc,
	}
}

func (h *Handler) Health(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Content-Type", "text/plain")
	w.Header().Set("Message-Reason", "Checking")
	w.WriteHeader(http.StatusOK)
	_, err := w.Write([]byte("The Server is working and live."))
	if err != nil {
		http.Error(w, "write failed", http.StatusInternalServerError)
	}
}

// post handlers dislike and like are yet to be created
func (h *Handler) GetAllPost(w http.ResponseWriter, r *http.Request) {
	posts, err := h.svc.GetAllPosts()

	if err != nil {
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, posts)
}

func (h *Handler) GetPostByID(w http.ResponseWriter, r *http.Request) {

	idStr := r.PathValue("id")
	postId, err := strconv.Atoi(idStr)

	if err != nil || postId <= 0 {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	post, err := h.svc.GetPostByID(postId)

	if err != nil {
		if errors.Is(err, domain.ErrBlogNotFound) {
			http.Error(w, "Post not found.", http.StatusNotFound)
			return
		}

		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, post)
}

func (h *Handler) GetPostLikes(w http.ResponseWriter, r *http.Request) {

	postId, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || postId <= 0 {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	users, err := h.svc.GetPostLikesById(postId)

	if err != nil {
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, users)

}

func (h *Handler) DeletePost(w http.ResponseWriter, r *http.Request) {

	postId, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || postId <= 0 {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	err1 := h.svc.DeletePost(postId)

	if err1 != nil {
		if errors.Is(err1, domain.ErrBlogNotFound) {
			http.Error(w, "post not found", http.StatusNotFound)
			return
		}
		http.Error(w, "internal Server error", http.StatusInternalServerError)
		return
	}

	message := fmt.Sprintf("successfully deleted post %d.", postId)
	JSON(w, http.StatusOK, message)
}

func (h *Handler) CreatePost(w http.ResponseWriter, r *http.Request) {

	defer r.Body.Close()

	var post domain.Blog

	if err := json.NewDecoder(r.Body).Decode(&post); err != nil {
		http.Error(w, "invalid input", http.StatusBadRequest)
		return
	}

	err := h.svc.CreatePost(&post)

	if err != nil {
		http.Error(w, "Something went wrong: internal server error.", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusCreated, post)
}

func (h *Handler) UpdatePost(w http.ResponseWriter, r *http.Request) {
	postId, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || postId <= 0 {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	defer r.Body.Close()

	var post domain.Blog

	if err := json.NewDecoder(r.Body).Decode(&post); err != nil {
		http.Error(w, "invalid input.", http.StatusBadRequest)
		return
	}

	post.ID = postId
	updatedPost, err := h.svc.UpdatePost(&post)

	if err != nil {
		http.Error(w, "Something went wrong: internal server error.", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, updatedPost)
}

// user handlers

func (h *Handler) GetUserByID(w http.ResponseWriter, r *http.Request) {

	userID, err := strconv.Atoi(r.PathValue("id"))
	if err != nil || userID <= 0 {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	user, err := h.svc.GetUserById(userID)
	if err != nil {
		if errors.Is(err, domain.ErrUserNotFound) {
			http.Error(w, "user not found", http.StatusNotFound)
			return
		}

		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, user)
}

func (h *Handler) GetUserByEmail(w http.ResponseWriter, r *http.Request) {

	email := r.URL.Query().Get("email")
	if email == "" {
		http.Error(w, "email is required", http.StatusBadRequest)
		return
	}

	user, err := h.svc.GetUserByEmail(email)
	if err != nil {
		if errors.Is(err, domain.ErrUserNotFound) {
			http.Error(w, "user not found", http.StatusNotFound)
			return
		}

		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, user)
}

func (h *Handler) GetAllUsers(w http.ResponseWriter, r *http.Request) {

	users, err := h.svc.GetAllUsers()
	if err != nil {
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, users)
}

func (h *Handler) GetFollowersByID(w http.ResponseWriter, r *http.Request) {

	userID, err := strconv.Atoi(r.PathValue("id"))
	if err != nil || userID <= 0 {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	users, err := h.svc.GetFollowersByID(userID)
	if err != nil {
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, users)
}

func (h *Handler) GetFollowingsByID(w http.ResponseWriter, r *http.Request) {

	userID, err := strconv.Atoi(r.PathValue("id"))
	if err != nil || userID <= 0 {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	users, err := h.svc.GetFollowingsByID(userID)
	if err != nil {
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusOK, users)
}

func (h *Handler) CreateUser(w http.ResponseWriter, r *http.Request) {

	defer r.Body.Close()

	var user domain.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	err := h.svc.CreateUser(&user)
	if err != nil {
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}

	JSON(w, http.StatusCreated, user)
}

func (h *Handler) LikePost(w http.ResponseWriter, r *http.Request) {

	defer r.Body.Close()

	blogId, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || blogId <= 0 {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}

	var like domain.BlogLike

	if err := json.NewDecoder(r.Body).Decode(&like); err != nil {
		http.Error(w, "invalid input", http.StatusBadRequest)
		return
	}

	like.BlogID = blogId

	if err := h.svc.LikePost(&like); err != nil {
		http.Error(w, "something went wrong: internal server error", http.StatusInternalServerError)
		return
	}

	message := fmt.Sprintf("user %d liked %d post", like.UserID, like.BlogID)
	JSON(w, http.StatusCreated, message)
}

func (h *Handler) DislikePost(w http.ResponseWriter, r *http.Request) {

	defer r.Body.Close()

	blogId, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || blogId <= 0 {
		http.Error(w, "invalid blog id", http.StatusBadRequest)
		return
	}

	var like domain.BlogLike

	if err := json.NewDecoder(r.Body).Decode(&like); err != nil {
		http.Error(w, "invalid input", http.StatusBadRequest)
		return
	}

	like.BlogID = blogId

	if err := h.svc.DislikePost(like.UserID, like.BlogID); err != nil {
		if errors.Is(err, domain.ErrBlogLikeNotFound) {
			http.Error(w, "like not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	message := fmt.Sprintf("user %d disliked post %d.", like.UserID, like.BlogID)

	JSON(w, http.StatusOK, message)
}

func (h *Handler) Follow(w http.ResponseWriter, r *http.Request) {

	userId, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || userId <= 0 {
		http.Error(w, "Invalid user id", http.StatusBadRequest)
		return
	}

	var follow domain.Follows

	defer r.Body.Close()
	if err := json.NewDecoder(r.Body).Decode(&follow); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	follow.FollowerID = userId
	if err := h.svc.Follow(&follow); err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	message := fmt.Sprintf("Now user %d follows user %d.", follow.FollowerID, follow.FollowingID)

	JSON(w, http.StatusCreated, message)
}

func (h *Handler) Unfollow(w http.ResponseWriter, r *http.Request) {

	userId, err := strconv.Atoi(r.PathValue("id"))

	if err != nil || userId <= 0 {
		http.Error(w, "Invalid user Id", http.StatusBadRequest)
		return
	}

	var follow domain.Follows

	defer r.Body.Close()
	if err := json.NewDecoder(r.Body).Decode(&follow); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	follow.FollowerID = userId
	if err := h.svc.Unfollow(follow.FollowerID, follow.FollowingID); err != nil {
		if errors.Is(err, domain.ErrUserNotFound) {
			http.Error(w, "user not found", http.StatusNotFound)
			return
		}
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	message := fmt.Sprintf("user %d unfollowed user %d", follow.FollowerID, follow.FollowingID)

	JSON(w, http.StatusOK, message)
}
