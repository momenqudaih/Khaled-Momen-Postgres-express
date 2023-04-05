BEGIN;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
    id SERIAL PRIMARY KEY ,
    name VARCHAR(20) NOT NULL ,
    email VARCHAR(60) NOT NULL,
    img_url VARCHAR(255) 
);

INSERT INTO users (name, email, img_url) VALUES 
('Khaled','khaled.f.toha@gmail.com', 'https://plus.unsplash.com/premium_photo-1670985631837-60435eb933e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
('Momen' , 'xxx-xxxx@gmail.com', '');


CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    text_content TEXT NOT NULL,
    post_date DATE NOT NULL,
    post_img TEXT
);

INSERT INTO posts (user_id, text_content, post_date) VALUES 
(1, 'HELLO', '2023-04-05');

COMMIT;