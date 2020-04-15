export default function halfSplit(stringToSplit: string) {
  const stringMiddle = Math.ceil(stringToSplit.length / 2);
  return {
    first: stringToSplit.slice(0, stringMiddle),
    second: stringToSplit.slice(stringMiddle),
  };
}
