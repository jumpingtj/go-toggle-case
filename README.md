# Go Toggle Case Extension

This VSCode extension helps you quickly switch between **Exported** and **Unexported** Go variable or function names by toggling their case. It's perfect for Go developers who want to easily convert between capitalized (exported) and lowercase (unexported) identifiers.

## Features

- **Toggle Exported/Unexported**: Switch the case of a Go function or variable name from **Exported** (like `MyFunction`) to **Unexported** (like `myFunction`), or vice versa.
- **Automatic Rename**: The extension automatically renames the symbol throughout your document—just like using VSCode's "Rename Symbol" feature (F2).
- **Effortless**: No need to manually change the case—just place your cursor on the symbol and let the extension do the work!

## Installation

**Install from VSCode Marketplace**:

- Search for **Go Toggle Case** in the [VSCode Marketplace](https://marketplace.visualstudio.com/) and click **Install**.

## How to Use

1. **Toggle Exported/Unexported**:
   - Place your cursor on the Go function or variable you want to toggle.
   - Open the **Command Palette** (`Cmd+Shift+P` or `Ctrl+Shift+P`), search for **"Toggle Exported/Unexported"**, and select it. The extension will toggle the case for you.
2. **Keyboard Shortcut** (Optional):
   - You can set a keyboard shortcut to make it even easier to toggle the case. For example, add this to your **keybindings.json**:
     ```json
     [
       {
         "key": "ctrl+alt+t",
         "command": "go-toggle-case.toggleExported",
         "when": "editorTextFocus"
       }
     ]
     ```
   - Now you can press `Ctrl+Alt+T` to toggle the case instantly.

## How It Works

- The extension looks at the word under your cursor.
- It toggles the **first letter's case**: if the word is **capitalized** (like `MyFunction`), it will turn it **lowercase** (like `myFunction`), and vice versa.
- It then automatically applies the change throughout the entire document—no need for confirmation or pressing **Enter**!

## Requirements

- **VSCode 1.60+**: This extension requires VSCode version 1.60 or later.
- **Go Support**: It works best when you have the Go extension for VSCode installed.

## Contributing

If you'd like to help improve this extension, feel free to contribute! You can:

- Open issues to report bugs or suggest features.
- Submit pull requests with code improvements or fixes.

## License

This extension is open-source and available under the [MIT License](LICENSE).
