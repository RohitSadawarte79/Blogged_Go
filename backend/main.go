// TODO: Application entrypoint.
// Responsibilities:
// 1) Load config (ports, DB DSN, CORS origin)
// 2) Initialize DB connection
// 3) Build router and middleware
// 4) Start HTTP server
package main

import (
	"database/sql"
	"fmt"
	"net/http"

	_ "github.com/lib/pq"

	"github.com/RohitSadawarte79/Blogged_Go/backend/db"
	"github.com/RohitSadawarte79/Blogged_Go/backend/handlers"
	"github.com/RohitSadawarte79/Blogged_Go/backend/middleware"
	"github.com/RohitSadawarte79/Blogged_Go/backend/models/config"
	"github.com/RohitSadawarte79/Blogged_Go/backend/routes"
	"github.com/RohitSadawarte79/Blogged_Go/backend/services"
)

func DSN(cfg *config.Config) string {
	return fmt.Sprintf(`host=%s port=%s user=%s password=%s dbname=%s sslmode=disable`, cfg.DBHost, cfg.DBPort, cfg.DBUser, cfg.DBPassword, cfg.DBName)
}

func ConnectDB(cfg *config.Config) (*sql.DB, error) {
	dsn := DSN(cfg)

	DB, err := sql.Open("postgres", dsn)

	if err != nil {
		return nil, fmt.Errorf("Error: %w", err)
	}

	if err := DB.Ping(); err != nil {
		return nil, fmt.Errorf("The database is not working: %w", err)
	}

	return DB, nil
}

func main() {

	cfg := config.Load()

	DB, err := ConnectDB(cfg)

	if err != nil {
		panic(err)
	}

	defer DB.Close()

	repo := db.NewPostgresRepository(DB)

	userService := services.NewService(repo, repo)

	handle := handlers.NewHandler(userService)

	mux := http.NewServeMux()

	routes.Register(mux, handle)

	stack := middleware.Recover(middleware.Log(middleware.CORS(mux)))

	err = http.ListenAndServe(":"+cfg.Port, stack)

	if err != nil {
		panic(err)
	}

}
