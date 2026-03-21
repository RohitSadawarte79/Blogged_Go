package routes

import (
	"net/http"

	"github.com/RohitSadawarte79/Blogged_Go/backend/handlers"
)

func Register(mux *http.ServeMux, h *handlers.Handler) {
	mux.HandleFunc("/health", h.Health)
	mux.HandleFunc("GET /blogs", h.GetAllPost)
	mux.HandleFunc("GET /blogs/{id}", h.GetPostByID)
	mux.HandleFunc("GET /blogs/{id}/likes", h.GetPostLikes)
	mux.HandleFunc("DELETE /blogs/{id}", h.DeletePost)
	mux.HandleFunc("POST /blogs", h.CreatePost)
	mux.HandleFunc("PUT /blogs/{id}", h.UpdatePost)
	mux.HandleFunc("POST /blogs/{id}/likes", h.LikePost)
	mux.HandleFunc("DELETE /blogs/{id}/likes", h.DislikePost)
	mux.HandleFunc("GET /users", h.GetAllUsers)
	mux.HandleFunc("POST /users", h.CreateUser)
	mux.HandleFunc("GET /users/{id}", h.GetUserByID)
	mux.HandleFunc("GET /users/{id}/followers", h.GetFollowersByID)
	mux.HandleFunc("GET /users/{id}/followings", h.GetFollowingsByID)
	mux.HandleFunc("GET /users/by-email", h.GetUserByEmail)
	mux.HandleFunc("POST /users/{id}/follow", h.Follow)
	mux.HandleFunc("DELETE /users/{id}/follow", h.Unfollow)

}
