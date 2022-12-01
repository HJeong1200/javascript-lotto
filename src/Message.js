const Message = {
  PURCHASE: "구입금액을 입력해 주세요.\n",
  NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUSNUMBER: "보너스 번호를 입력해 주세요.\n",
  printQty(qty) {
    return `${qty}개를 구매했습니다.`;
  },
  finalResult(results, profit) {
    return [
      "당첨 통계",
      "---",
      `3개 일치 (5,000원) - ${results["5"]}개`,
      `4개 일치 (50,000원) - ${results["4"]}개`,
      `5개 일치 (1,500,000원) - ${results["3"]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["2"]}개`,
      `6개 일치 (2,000,000,000원) - ${results["1"]}개`,
      `총 수익률은 ${profit}%입니다.`,
    ];
  },
};

module.exports = Message;
