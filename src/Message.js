const Message = {
  REQUEST: {
    PURCHASE: "구입금액을 입력해 주세요.\n",
    NUMBERS: "당첨 번호를 입력해 주세요.\n",
    BONUSNUMBER: "보너스 번호를 입력해 주세요.\n",
  },
  ERROR: {
    PURCHASE: "[ERROR] 1,000원 단위 숫자를 입력해 주세요.",
    VALIDNUMBER: "[ERROR] 1~45 사이의 숫자를 입력해주세요.",
    DUPLICATE: "[ERROR] 중복되지 않는 6개의 숫자를 입력해주세요.",
    BONUSNUMBER: "[ERROR] 1~45 사이의 숫자를 입력해주세요.",
    DUPLICATEBONUS:
      "[ERROR] 입력하신 로또 번호와 중복되지 않는 숫자를 입력해주세요.",
  },
  PRIZES: {
    FIRST: 2_000_000_000,
    SECOND: 30_000_000,
    THIRD: 1_500_000,
    FOURTH: 50_000,
    FIFTH: 5_000,
  },
  printQty(qty) {
    return `${qty}개를 구매했습니다.`;
  },
  finalResult(results, profit) {
    return [
      "당첨 통계",
      "---",
      `3개 일치 (${this.PRIZES.FIFTH.toLocaleString("ko-KR")}원) - ${
        results["5"]
      }개`,
      `4개 일치 (${this.PRIZES.FIFTH.toLocaleString("ko-KR")}원) - ${
        results["4"]
      }개`,
      `5개 일치 (${this.PRIZES.FIFTH.toLocaleString("ko-KR")}원) - ${
        results["3"]
      }개`,
      `5개 일치, 보너스 볼 일치 (${this.PRIZES.FIFTH.toLocaleString(
        "ko-KR"
      )}원) - ${results["2"]}개`,
      `6개 일치 (${this.PRIZES.FIFTH.toLocaleString("ko-KR")}원) - ${
        results["1"]
      }개`,
      `총 수익률은 ${profit}%입니다.`,
    ];
  },
};

module.exports = Message;
