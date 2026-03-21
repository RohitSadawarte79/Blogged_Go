package config

import (
	"os"
	"strings"
)

type Config struct {
	Port           string
	AllowedOrigins []string
	DBHost         string
	DBPort         string
	DBUser         string
	DBPassword     string
	DBName         string
}

func Load() *Config {
	return &Config{
		Port: getEnv("Port", "8080"),
		AllowedOrigins: getEnvSlice("ALLOWED_ORIGINS",
			[]string{"http://localhost:3000"}),
		DBHost:     getEnv("DB_HOST", "localhost"),
		DBPort:     getEnv("DB_PORT", "5432"),
		DBUser:     getEnv("DB_USER", "rohit"),
		DBPassword: getEnv("DB_PASSWORD", ""),
		DBName:     getEnv("DB_NAME", "Blloged_postgres"),
	}
}

func getEnv(key, fallback string) string {
	if val := os.Getenv(key); val != "" {
		return val
	}

	return fallback
}

func getEnvSlice(key string, fallback []string) []string {
	if val := os.Getenv(key); val != "" {
		orgins := strings.Split(val, ",")
		return orgins
	}

	return fallback
}
