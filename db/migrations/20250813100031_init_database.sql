-- migrate:up
CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    phoneNo VARCHAR(15) NOT NULL CHECK (phoneNo ~ '^\+?[1-9]\d{1,14}$'),
    password VARCHAR(255) NOT NULL,
    create_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT pk_users PRIMARY KEY (id),
    CONSTRAINT uk_users_phoneNo UNIQUE (phoneNo)
);


-- migrate:down
DROP TABLE IF EXISTS users;