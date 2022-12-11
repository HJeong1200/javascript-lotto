const Message = {
  buyLotto: "구입 금액을 입력해주세요.\n",
  purchased: "개를 구매했습니다.",
  winNumber: "\n당첨 번호를 입력해 주세요.\n",
  bonusNumber: "\n보너스 번호를 입력해 주세요.\n",
  result: "\n당첨 통계\n---",
};

const ErrorMessage = {};

const GameResult = {
  fifth: 0,
  fourth: 0,
  third: 0,
  second: 0,
  first: 0,
};

const Money = {
  fifth: 5_000,
  fourth: 50_000,
  third: 1_500_000,
  second: 30_000_000,
  first: 2_000_000_000,
};

const MyResult = ({ fifth, fourth, third, second, first }) => {
  return `3개 일치 (5,000원) - ${fifth}개
4개 일치 (50,000원) - ${fourth}개
5개 일치 (1,500,000원) - ${third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개
6개 일치 (2,000,000,000원) - ${first}개`;
};

const Profit = (profit) => {
  return `총 수익률은 ${profit}%입니다.`;
};

module.exports = { Message, ErrorMessage, GameResult, MyResult, Money, Profit };
