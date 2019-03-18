/**
 * 数列规律：F(n) = F(n-1) + F(n-2);
 * 1, 1, 2, 3, 5, 8, 13, 21 ...
 * @param {*} n 数列长度
 */

class Fibonacci {
  constructor(n){
    this.list = [1,1];
    this.maxIndex = n; // 第N项
    this.generator();
  }

  /**
   * 生成数列
   */
  generator(){
    let res = this.list;
    for (let i = 2; i < this.maxIndex; i += 1) {
      res[i] = res[i-1] + res[i-2];
    }
    this.list = res;
  }
  /**
   * 获取最后一项
   */
  getLastOne(){
    return this.list[this.maxIndex - 1];
  }
  /**
   * 输出整个队列
   */
  getSequence(){
    return this.list;
  }
  /**
   * 计算数列前N项之和
   */
  plusAll(){
    return this.list.reduce(function(total, next){
      return total + next
    },0)
  }
}

console.log(new Fibonacci(9).getLastOne());
console.log(new Fibonacci(9).getSequence());
console.log(new Fibonacci(15).plusAll());