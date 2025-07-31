# redis-express-pro
echo "# redis-express-pro" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:harpreetsinghdt/redis-express-pro.git
git push -u origin main

2️⃣ Remove node_modules from Git Staging (Unstage it)
Run the following command to unstage node_modules:

bash
Copy
Edit
git rm -r --cached node_modules/
The --cached flag removes it from Git index (staging) but keeps the folder locally.

This will tell Git to stop tracking it.