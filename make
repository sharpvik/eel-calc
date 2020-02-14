python3 -m eel main.py web --onefile # creates executable
rm -r build
rm main.spec
if [ -d __pycache__ ]
then
    rm -r __pycache__
fi
mv dist/main eel-calc
rmdir dist # some cleanup
