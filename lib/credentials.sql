node -e "console.log(require('bcryptjs').hashSync('Admin@987#BMW', 10))"
node -e "console.log(require('bcryptjs').hashSync('Editor@987#BMW', 10))"

insert into admin_users (username, password_hash, role) values
('admin', '$2b$10$HsC2llbNz6sKEwp0mpygp.fP8FmGGm5ITr6TNuk3BczL4boMOR6Ti', 'admin'),
('editor', '$2b$10$IVak0VuipGZdg3oYHvGDq.8uQtIB3WgSQfX0HJIE6bdBzPouuOXBW', 'editor');