import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "go-toggle-case" is now active!'
  );

  const toggleExported = vscode.commands.registerCommand(
    "go-toggle-case.toggleExported",
    async () => {
      // Get the current editor and cursor position
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return vscode.window.showErrorMessage("No active editor found.");
      }

      const document = editor.document;
      const position = editor.selection.active;

      // Get the word under the cursor
      const wordRange = document.getWordRangeAtPosition(position);
      if (!wordRange) {
        return vscode.window.showErrorMessage("No word found at the cursor.");
      }

      const word = document.getText(wordRange);
      const toggledWord = toggleFirstCharCase(word);

      // Trigger the rename action (F2-style) and provide the toggled name directly
      await vscode.commands.executeCommand("editor.action.rename");

      // After triggering rename, we use the workspace API to replace the symbol across the document with the new name
      const edit = new vscode.WorkspaceEdit();
      edit.replace(document.uri, wordRange, toggledWord);
      await vscode.workspace.applyEdit(edit);

      // Provide feedback to the user
      vscode.window.showInformationMessage(
        `Renamed '${word}' to '${toggledWord}'`
      );
    }
  );

  context.subscriptions.push(toggleExported);
}

export function deactivate() {}

// Helper function to toggle the first character's case
function toggleFirstCharCase(word: string): string {
  if (!word) {
    return word;
  }

  const firstChar = word[0];
  const rest = word.slice(1);

  // Toggle case of the first character
  if (firstChar === firstChar.toUpperCase()) {
    return firstChar.toLowerCase() + rest;
  } else {
    return firstChar.toUpperCase() + rest;
  }
}
