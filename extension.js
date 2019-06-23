// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


// contributes 中的command 是保证输入 ctrl p > 之后， 能找到此命令 （title 为label）
// activationEvents 中的oncommand 保证了点击命令之后，vscode 能通过入口文件找到对应registerCommand 注册的相同的id sayStart, 所有三者的关系如下图

// contrbutes（控制显示） <- id -> activationEvents <- id -> 此命令具体实现
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('vscode: ', vscode);
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "react" is now active!');

	const message = 'say yes!';
	console.log(message);


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.sayStart', function (uri) {
		console.log('uri: ', uri);
		// The code you place here will be executed every time your command is executed
		vscode.window.showInformationMessage(message);
		vscode.commands.getCommands().then((allcommands) => {
			console.log('allcommands: ', allcommands);
		})
		// Display a message box to the user
		// vscode.window.showOpenDialog({
		// 	filters: {
		// 		'Javascript': ['js']
		// 	}
		// });
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
