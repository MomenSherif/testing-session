import { getWinner } from './utils';

export default function logAdminWinner() {
  const admins: [string, string] = ["Mo'men", 'Safwat'];
  console.log(`The winner admin is ${getWinner(...admins)} 🚀`);
}
