export interface todayInterface {
  date: string;
  tips: string;
  league: string;
  home: string;
  away: string;
}

export interface yesterdayInterface {
  date: string;
  tips: string;
  league: string;
  home: string;
  away: string;
  score: string;
}

export function filterObjectsWithUniqueMatches(arr: any) {
  const uniqueHomes = new Set<string>();
  const filteredTeams: any = [];
  arr?.forEach((obj: any) => {
      const home = obj.home && obj.home.trim();
      if (home && !uniqueHomes.has(home)) {
          filteredTeams.push(obj);
          uniqueHomes.add(home);
      }
  });
  return filteredTeams;
}
