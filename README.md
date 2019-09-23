# Eel-Calculator

A desktop app made using the magic of Python with [Eel] module.

## Dependencies

In order to run, this app relies on a couple of modules:

* eel
* pyinstaller (optional)

You can manually install modules, using

```bash
pip3 install eel
pip3 install pyinstaller
```

However, module versions may differ. There is a better way to do it -- Pipenv!

```bash
pip3 install pipenv # if you don't have pipenv yet
pipenv install
pipenv shell # to enter to pipenv's subshell
# Voila! All dependencies installed. 
# We are ready to run it.
```

## How to Use

Run this to run with Python:

```bash
python3 main.py
```

Or this to make an executable:

```bash
python3 -m eel main.py web --onefile # creates executable
rm -r build
rm main.spec
mv dist/main eel-calc
rmdir dist # some cleanup
./eel-calc # run executable
```

I've provided a *bash* script for those who don't wanna type it up themselves,
it's called *make*. Run it with:

```bash
chmod +x make
./make
```

The *make* script doesn't include the last line that actually runs the
executable `./eel-calc` as its purpose is only to **make** that file. Use that
line to run it yourself whenever you are ready.

## Contact

For any personal or business enquiries:

+ Email: *sharp.vik@gmail.com*
+ [Twitter](https://twitter.com/sharp_vik)
+ [Instagram](https://www.instagram.com/viktooooor)
