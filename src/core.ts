import { QueryManager } from './QueryManager';

export function init(endpoint: string): QueryManager {
  return new QueryManager(endpoint);
}
