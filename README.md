# 1. Go to source repo
cd ~/PORTFOLIO/portfolio/portfolio
npm run build

# 2. Copy build to pages repo
cp -r dist/* ~/PORTFOLIO/my-portfolio/

# 3. Deploy
cd ~/PORTFOLIO/my-portfolio
git add .
git commit -m "Deploy update"
git push origin main
