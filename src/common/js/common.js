export const func = {
    functionName: (data) => {
        console.log(data);
    },
    /*
     * TODO:Format tiền tệ
     * CreateBy:ndtin(8/6/2021)
     */
    formatMoney: function (money) {
        if (money != null)
          var num = money.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        else return "0";
        return num;
      },
}