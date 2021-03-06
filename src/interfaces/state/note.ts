import INote from 'interfaces/general/note';

// TODO: Could be use as a generic interface for data api i.e IDataState<D>
export default interface INoteState {
  add: {
    adding: boolean;
    added: boolean;
    error: string;
  };
  list: {
    fetching: boolean;
    fetched: boolean;
    error: string;
    // TODO: Change this to data: D[] or extend IDataState, if going to be generic
    notes: INote[];
    initial: boolean;
  };
  fetch: {
    fetching: boolean;
    fetched: boolean;
    error: string;
    // TODO: Change this to data: D or extends IDataState, if going to be generic
    note: INote;
  };
  delete: {
    deleting: boolean;
    deleted: boolean;
    error: string;
  };
  update: {
    updating: boolean;
    updated: boolean;
    error: string;
    id: string;
  };
}
