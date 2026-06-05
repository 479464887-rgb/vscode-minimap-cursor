const vscode = require('vscode');
function activate(context) {
  console.log('vscode-minimap-cursor activated');
  let disposable = vscode.commands.registerCommand('vscode-minimap-cursor.hello', () => {
    vscode.window.showInformationMessage('vscode-minimap-cursor is ready!');
  });
  context.subscriptions.push(disposable);
}
function deactivate() {}
module.exports = { activate, deactivate };
