# 1. Create the index.html
create-js-index Javascript-Certification/my-new-project/

# 2. Run a server on the project folder
serve Javascript-Certification/my-new-project/
localhost:3000

# 3. Take a screenshot of the index.html file running in browser
prt sc (or whatever keyboard shortcut you use)

# 4. Move and rename screenshot
mv -i ~/Pictures/Screenshots/your-screenshot.png ~/Documents/freeCodeCamp-Projects/Javascript-Certification/my-new-project/media/screenshot.png

# 5. Compress the screenshot
compress_thumb Javascript-Certification/my-new-project/media/screenshot.png

# 6. Inject the og/twitter meta tags
inject-meta Javascript-Certification/my-new-project/

# 7. Create a Read me for my-new-project folder
subl ~/Documents/freeCodeCamp-Projects/Javascript-Certification/my-new-project/README.md 

# 8. Push to GitHub
git add Javascript-Certification/my-new-project/
git commit -m "add: my new project"
git push
