// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('setup-generator.generateSetup', () => {
		// The code you place here will be executed every time your command is executed
		let folderPath = vscode.workspace.rootPath;
		let gituser = "Dogeek";
		let year = new Date().getFullYear().toString();
		let packagename = "testpackage";
		let data = fs.readFileSync('./setupTemplate').toString("utf8");
		data.replace('$gituser', gituser);
		data.replace('$packagename', packagename);
		data.replace('$year', year);

		fs.writeFileSync(folderPath + '/setup.py', data);

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Setup Generator!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
