export interface IBackendResponse<F> {
  count: number;
  next: number | null;
  previous: number | null;
  results: F;
}
