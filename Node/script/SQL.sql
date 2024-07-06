CREATE TABLE users
(
    id           SERIAL PRIMARY KEY,
    username     VARCHAR(255) NOT NULL,
    password     VARCHAR(255) NOT NULL,
    role         VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    attributes   JSON,
    mete         JSON,
    created_at   TIMESTAMP    NOT NULL,
    updated_at   TIMESTAMP
);