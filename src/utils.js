export const selectedErrorResponse = (errorType) => {
  const errors = {
    input: '[ERROR] : 입력을 다시 확인해 주세요.',
    output: '[ERROR] : 출력중 에러가 발생했습니다.',
    calculator: '[ERROR] : 계산 중 에러가 발생했습니다.',
  };
  return errors[errorType];
};
