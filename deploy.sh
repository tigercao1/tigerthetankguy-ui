rm -rf build
npm run build
rm -rf ../../tigercao1.github.io/*
mv -v build/* ../tigercao1.github.io
git -C ../tigercao1.github.io add .
git -C ../tigercao1.github.io commit -m "deployment"
git -C ../tigercao1.github.io push