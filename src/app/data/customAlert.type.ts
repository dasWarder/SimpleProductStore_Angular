
type SwalMessage = 'info' | 'error' | 'warning' | 'success' | 'question';

export interface SwalAlert {
  title: string,
  description: string,
  type: SwalMessage
};
