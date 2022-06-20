通过反复的执行开启服务的node脚本来确定端口是否可用 若可以则停止执行
经验证net.createServer().listen(port) 并不能保证检验出端口是否可用 如本地使用node开启了3000端口 然后通过net...检查3000端口占用情况时 结果是直接覆盖原开启的服务
使用命令行检测 netstat -aon | findstr [port]
不保证 netstat -aon | findstr [port] 在任意系统上可用 目前仅在win10上验证其可用