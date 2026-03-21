FROM golang:1.25-alpine AS builder

WORKDIR /app

COPY backend/go.mod backend/go.sum ./

RUN go mod download

COPY backend/ .

RUN CGO_ENABLED=0 GOOS=linux go build -o /server .



#below is the tiny image only has the binary

FROM alpine:3.19

COPY --from=builder /server /server

EXPOSE 8080

CMD ["/server"]