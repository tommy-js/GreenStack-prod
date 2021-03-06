import { FollowingItem } from "../../types/types";

export function returnFoundUser(userId: string, following: FollowingItem[]) {
  let arr = [...following];
  let alreadyAdded: boolean = false;
  let filter = arr.filter((arr: FollowingItem) => arr.userId === userId);
  if (filter.length > 0) alreadyAdded = true;
  else alreadyAdded = false;
  return alreadyAdded;
}

export function returnDate(timestamp: number) {
  let date = new Date(timestamp * 1000);
  let years = date.getFullYear();
  let months = date.getMonth() + 1;
  let days = date.getDate();
  let str = `${months}/${days}/${years}`;
  return str;
}
