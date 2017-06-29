FROM golang:latest

ARG app_env
ENV APP_ENV $app_env

COPY ./src /go/src/github.com/user/project/app
WORKDIR /go/src/github.com/user/project/app

RUN go get ./
RUN go build

CMD if [ ${APP_ENV} = production ]; \
	then \
	app; \
	else \
	go get github.com/codegangsta/gin && \
	gin run github.com/user/project/app; \
	fi

EXPOSE 3000
