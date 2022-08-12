export function last<T>(arr: T[], callback: (item: T) => void): void {
  callback(arr[arr.length - 1]);
}

export function getWinner(player1: string, player2: string): string {
  const roundsToWin = 2;
  const playersScore: [number, number] = [0, 0];

  let isGameActive = true;
  let winner: string;

  while (isGameActive) {
    const playerIndexRoundWinner = Math.round(Math.random());
    playersScore[playerIndexRoundWinner]++;

    if (playersScore[playerIndexRoundWinner] >= roundsToWin) {
      isGameActive = false;
      winner = playerIndexRoundWinner === 0 ? player1 : player2;
    }
  }

  return winner!;
}
