function checkParentheses(arr) {
  let n = arr.length;
  let stk = [];
  for (i = 0; i < n; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stk.push(arr[i]);
    } else if (
      stk.length > 0 &&
      ((arr[i] === ")" && stk[stk.length - 1] === "(") ||
        (arr[i] === "}" && stk[stk.length - 1] === "{") ||
        (arr[i] === "]" && stk[stk.length - 1] === "["))
    ) {
      stk.pop();
    } else return false;
  }
  return stk.length === 0;
}
let s = "{()}[]";
console.log("input: ", s, "\n", "output: ", checkParentheses(s));
