
# vscode-plugin-allinone
coding habits personally
vscode 插件如何运行
https://code.visualstudio.com/api/references/extension-manifest 

1. 编写调用需要执行的函数extension.js 文件， 但是执行文件内必须暴露两个函数(activate, deactivate)     
    ```
    const activate = (context) => {
        console.log('run something by nodejs');
        // or 编写一个vscode 插件
        let register = vscode.commands.registerCommand('extension.sayStart', function () {
		    vscode.window.showInformationMessage(message);
	    });
        context.subscriptions.push(disposable);
    }

    exports.activate = activate;
    function deactivate() {}
    module.exports = {
	    activate,
	    deactivate
    }
    ```
2. 插件如何被激活(package.json activationEvents)   
https://code.visualstudio.com/api/references/activation-events

    ```
    onLanguage:${language}
    onCommand:${command} // 用户输入命令时激活
    onDebug
    workspaceContains:${toplevelfilename}
    onFileSystem:${scheme}
    onView:${viewId}
    onUri
    * // 默认激活
    ```

