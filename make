python3 -m eel main.py web --onefile # creates executable
rm -r build
rm main.spec
mv dist/main eel-calc
rmdir dist # some cleanup