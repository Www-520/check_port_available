import { execSync } from 'child_process';

// 递归的方式实现 不推荐 容易导致栈溢出
/*
function test(port: number) {
    try {
        execSync(`netstat -aon | findstr ${port}`);
        // 无报错即端口已被使用
        test(port += 1);
    } catch {
        console.log(`可用端口 ${port}`);
    }
}

test(3000);
*/

// 死循环的方式实现
function test(port: number): number {
    while (true) {
        try {
            execSync(`netstat -aon | findstr ${port}`);
            port += 1;
        } catch {
            console.log(`可用端口 ${port}`);
            return port;
        }
    }
}

export default test;
