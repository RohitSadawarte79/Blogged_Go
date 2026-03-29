-- Schema initialization script
-- Runs automatically on first database startup via /docker-entrypoint-initdb.d/

CREATE TABLE IF NOT EXISTS public.users (
    id         SERIAL PRIMARY KEY,
    username   VARCHAR(100)  NOT NULL,
    email      VARCHAR(255)  NOT NULL UNIQUE,
    password   VARCHAR(255)  NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.blogs (
    id         SERIAL PRIMARY KEY,
    title      TEXT NOT NULL,
    content    TEXT NOT NULL,
    author_id  INTEGER REFERENCES public.users(id),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.follows (
    follower_id  INTEGER NOT NULL REFERENCES public.users(id),
    following_id INTEGER NOT NULL REFERENCES public.users(id),
    created_at   TIMESTAMP DEFAULT now(),
    PRIMARY KEY (follower_id, following_id)
);

CREATE TABLE IF NOT EXISTS public.blog_likes (
    user_id    INTEGER NOT NULL REFERENCES public.users(id),
    blog_id    INTEGER NOT NULL REFERENCES public.blogs(id),
    created_at TIMESTAMP DEFAULT now(),
    PRIMARY KEY (user_id, blog_id)
);
