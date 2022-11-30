const Message = {
  PURCHASE: "구입금액을 입력해 주세요.\n",
  NUMBERS: "당첨 번호를 입력해 주세요.\n",
  printQty(qty) {
    return `${qty}개를 구매했습니다.`;
  },
};

module.exports = Message;
